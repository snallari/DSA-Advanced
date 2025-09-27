class Node {
    constructor(val = 0) {
        this.val = val;
        this.neighbors = [];
    }
}
class Graph {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(v) {
        if (!this.adjancencyList[v]) {
            this.adjancencyList[v] = []
        }
    }
    addEdge(v1, v2) {
        this.adjancencyList[v1].push(v2)
        this.adjancencyList[v2].push(v1)
    }
    cyclic() {
        this.addVertex(1)
        this.addVertex(2)
        this.addVertex(3)
        this.addVertex(4)
        this.addEdge(1, 2)
        this.addEdge(1, 3)
        this.addEdge(2, 4)
        //this.addEdge(3, 4)
        console.log("adjancency", this.adjancencyList);

    }

    toposort(v, edges) {
        let graph = new Graph()
        let indegree = {}, q = [], qpop, results = []
        for (let i = 0; i < v.length; i++) {
            graph.addVertex(v[i])
            indegree[v[i]] = 0
        }
        for (let i = 0; i < edges.length; i++) {
            graph.addEdge(edges[i][0], edges[i][1])
            indegree[edges[i][1]]++
        }
        for (let i = 0; i < v.length; i++) {
            if (indegree[i] == 0) {
                q.push(i)
            }
        }
        //console.log("indegree", q)
        while (q.length > 0) {
            qpop = q.shift()
            results.push(qpop)
            //console.log("qpop", qpop)
            for (let neigh of graph.adjancencyList[qpop]) {
                // console.log("neigh", indegree[neigh], neigh)
                indegree[neigh]--
                // console.log("neigh--", indegree[neigh], neigh)
                if (indegree[neigh] == 0) {
                    q.push(neigh)
                }
            }
        }
        if (results.length !== v.length) {
            console.log("Graph contains cycle!");
            return [];
        }

        // console.log("indegree",  indegree)
        return results
    }

    courseSchedule(courses, pre) {
        let graph = new Graph()
        let indegree = []
        for (let i = 0; i < courses.length; i++) {
            graph.addVertex(courses[i])
            indegree[courses[i]] = 0
        }
        for (let i = 0; i < pre.length; i++) {
            graph.addEdge(pre[i][0], pre[i][1])
            indegree[pre[i][1]]++
        }
        console.log("list", graph.adjancencyList)
        //instead of visited, we push the courses with indgree 0 into queue 
        // in bfs we push the first visited node into queue and set visited and traverse the graph
        let q = []
        for (let v of courses) {
            if (indegree[v] == 0) {
                q.push(v)
            }
        }
        console.log("q", q)
        while (q.length > 0) {
            let qpop = q.pop()
            for (let v of graph.adjancencyList[qpop]) {
                //instaed of checking visited , we decrement indregree and we check indegree 0 and push
                indegree[v]--
                if (indegree[v] == 0) {
                    q.push(v)
                }
            }
        }
        console.log("indegree", indegree)
        for (let i = 0; i < courses.length; i++) {
            if (indegree[i] != 0) {
                return false
            }
        }
        return true
    }


    courseSchedule2(courses, pre) {
        let graph = new Graph()
        let indegree = []
        for (let i = 0; i < courses; i++) {
            graph.addVertex(i)
            indegree[i] = 0
        }
        for (let i = 0; i < pre.length; i++) {
            graph.addEdge(pre[i][0], pre[i][1])
            indegree[pre[i][1]]++
        }
        console.log("list", graph.adjancencyList)
        //instead of visited, we push the courses with indgree 0 into queue 
        // in bfs we push the first visited node into queue and set visited and traverse the graph
        let q = []
        for (let i = 0; i < courses; i++) {
            if (indegree[i] == 0) {
                q.push(i)
            }
        }
        console.log("q", q)
        while (q.length > 0) {
            let qpop = q.pop()
            for (let v of graph.adjancencyList[qpop]) {
                //instaed of checking visited , we decrement indregree and we check indegree 0 and push
                indegree[v]--
                if (indegree[v] == 0) {
                    q.push(v)
                }
            }
        }
        console.log("indegree", indegree)
        for (let i = 0; i < courses; i++) {
            if (indegree[i] != 0) {
                return false
            }
        }
        return true
    }
    clone(v) {
        const visited = new Map()
        const q = [v]
        let qpop, results = []
        visited.set(v, new Node(v))

        while (q.length > 0) {
            qpop = q.pop()
            results.push(qpop)
            for (let v of this.adjancencyList[qpop]) {
                if (!visited.has(v)) {
                    visited.set(v, new Node(v))
                    q.push(v)
                }
                //get the poped node and  add the neighbours to it
                visited.get(qpop).neighbors.push(visited.get(v));
            }
            console.log("visited", visited, q)
        }
        return
    }

    // 20 min babe
    bfs(v) {
        const visited = new Set()
        const q = [v]
        let qpop, results = []
        visited.add(v)
        while (q.length > 0) {
            qpop = q.pop()
            results.push(qpop)
            for (let v of this.adjancencyList[qpop]) {
                if (!visited.has(v)) {
                    visited.add(v)
                    q.push(v)
                    console.log("visited", visited, q)
                }
            }
        }
        return results
    }

    krushal(nodes, edges) {
        let min = new heaps()
        min.insert(...nodes)
        let result = []
        while (min.values.length) {
            let node = min.extractMin()
            if (!node.visited) {
                node.visited = true
                result.push(node)
            }
            let disjoint = new disjoint(nodes.length)
            if (disjoint.find(node) !== disjoint.find(node.next)) {
                disjoint.union(node, node.next)
                result.push({ node1: node, node2: node.next, weight: edges.weight })
                totalWeight += edges.weight
                node.next.visited = true
            } else {
                node.next.visited = true
            }
        }
    }
}

let g = new Graph()
g.cyclic()
g.krushal()
//g.courseSchedule([1, 2, 3, 4], [[1, 2], [1, 3], [2, 4], [3, 4]])
//console.log(g.bfs(1))
//console.log("clone",g.clone(1))
//g.toposort([1, 2, 3, 4], [[1, 2], [1, 3], [2, 4], [3, 4]])
//g.toposort([1,2,3,4],[[1,2],[2,3],[3,4]])
//console.log(g.courseSchedule2(2,[[1,0]]))

