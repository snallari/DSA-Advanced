class GraphSai{
    adjancencyList={}
    constructor(){
       this.adjancencyList={}
    }

    addVertex(data1,data2){
        if (!this.adjancencyList[data1]) {
            this.adjancencyList[data1]=[]
        }
        return this.adjancencyList[data1]
    }
    addEdge(data1, data2){
        if (this.adjancencyList[data1]) {
            this.adjancencyList[data1].push(data2)
        }
        if (this.adjancencyList[data2]) {
            this.adjancencyList[data2].push(data1)//This is directed graph
        }
        console.log(this.adjancencyList)
        return this.adjancencyList
    }

    bfs(val){
            let q=[],pop, visted=new Set(), neighbour=[]
            q.push(val)
            visted.add(val);
            while(q.length>0){
              pop=q.pop()
              neighbour=this.adjancencyList[pop]
              console.log("q",q, "q",pop, "neighbour", neighbour)
                neighbour.forEach(element => {
                    console.log("element", element, "set", visted)
                    if(!visted.has(element)){
                    visted.add(element)
                    q.push(element)
                    }
                  });
            }
        }

        dfs(val){
            let q=[],pop, visted=new Set(), neighbour=[]
            q.push(val)
            visted.add(val);
            while(q.length>0){
              pop=q.shift()
              neighbour=this.adjancencyList[pop]
              console.log("dfs",q, "q",pop, "neighbour", neighbour)
                neighbour.forEach(element => {
                    console.log("element", element, "set", visted)
                    if(!visted.has(element)){
                    visted.add(element)
                    q.push(element)
                    }
                  });
            }
        }
        topoSort(){
            let q=[], popedVal, visited=new Set(), indegree={}
            //Evaluate indegree
            for(let val in this.adjancencyList){
                indegree[val]=0
                console.log("indegree", indegree)
            }
            for(let i in this.adjancencyList){
                this.adjancencyList[i].forEach((val)=>{
                    // if(!visited.has(val)){
                    console.log("val",val,"i", i)
                        indegree[val]++
                        // visited.add(val)
                    // }
                    console.log("indegree", indegree)
                })
            }
            for(let v in this.adjancencyList){
                if(indegree[v]==0){
                     // Same steps wrapped inside if indegree=0
                    q.push(i)
                    visited.add(i)
                    console.log("indegree", indegree, "visites", visited, "Q",q)
                }
            }
            // q.push(val)
            // visited.add(val)
            while(q.length>0){
              popedVal=q.pop()
              this.adjancencyList[popedVal].forEach(val=>{
                if(!visited.has(val)){
                  indegree[val]--
                  //reduce indegree of neighbouurs --
                  if(indegree[val]==0){
                     // Sam steps wrapped inside if indegree=0
                    q.push(val)
                    visited.add(val)
                  }
                }
              })
            }
        }
}

var graph=new GraphSai()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')
graph.addEdge('C','D')

graph.bfs('D')
graph.dfs('A')
graph.topoSort()