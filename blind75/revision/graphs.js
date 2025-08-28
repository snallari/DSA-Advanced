class Node {
    constructor() {
        this.adjacencyList = []
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2)
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1)
        }
    }

    bfs(start) {
        let q = [], pop, res = []
        let visited = new Set()
        q.push(start)
        visited.add(start)
        while (q.length>0) {
            pop = q.shift()
            res.push(pop)
           for(let neigh of this.adjacencyList[pop]){
                if (!visited.has(neigh)) {
                    visited.add(neigh)
                    q.push(neigh)
                }
            }
        }
        console.log("bfs", res)
        return Array.from(visited)
    }

    dfs(start){
        let stack = [], pop, res = []
        let visited = new Set()
        stack.push(start)
        visited.add(start)
        while (stack.length>0) {
            pop = stack.pop()
            res.push(pop)
            for(let neigh of this.adjacencyList[pop]){
                if (!visited.has(neigh)) {
                    visited.add(neigh)
                    stack.push(neigh)
                }
            }
        }
        console.log("dfs", res)
        return Array.from(visited)
    }
}

let g=new Graph()
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addEdge(1, 2)
g.addEdge(2, 3)
g.addEdge(1, 3)
g.addEdge(4, 5)

console.log(g)
g.bfs(3)
g.dfs(3)