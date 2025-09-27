import HeapsSai from "../../../HeapsSai.js"
import Disjoint from "../knapsack-greedy/disjoint.js"
//scan through all the array
//get the min 
//check if there is a union
//if no union add to result and union the two, add the weight, mark the node as visited
//else skip

function krushal(nodes,edges){
    let min = new HeapsSai()
    let visited = new Set()
    let totalWeight = 0
    min.insert(...nodes)
    let result = []
    let disjoint = new Disjoint(nodes.length)
    while (min.values.length) {
        let node = min.extractMin()
        console.log(node)
        if (!visited.has(node)) {
            visited.add(node)
            result.push(node)
        }
        if (disjoint.find(node) !== disjoint.find(node.next)) {
            disjoint.union(node, node.next)
            result.push({node1:node,node2:node.next,weight:edges.weight})
            totalWeight+=edges.weight
            visited.add(node.next)
        }else{
            visited.add(node.next)
        }
    }
    console.log("totalweight", totalWeight, visited)
}

function kruskal(nodes, edges) {
    // edges: [{from, to, weight}]
    edges.sort((a, b) => a.weight - b.weight);
    let disjoint = new Disjoint(nodes.length);
    let totalWeight = 0;
    let result = [];
    for (const edge of edges) {
        if (disjoint.find(edge.from) !== disjoint.find(edge.to)) {
            disjoint.union(edge.from, edge.to);
            result.push(edge);
            totalWeight += edge.weight;
        }
    }
    console.log("totalWeight", totalWeight, result);
    return result;
}

// Example edges array for testing
const edges = [
    {from: 1, to: 2, weight: 4},
    {from: 1, to: 3, weight: 1},
    {from: 2, to: 3, weight: 2},
    {from: 3, to: 4, weight: 5},
    {from: 4, to: 5, weight: 3},
    {from: 5, to: 6, weight: 6}
];

console.log(kruskal([1,2,3,4,5,6], edges));