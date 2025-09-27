export default class disjoint{
    constructor(n){
        this.parent=new Array(n)
        for(let i=0;i<n;i++){
            this.parent[i]=i
        }
    }
    union(x,y){
        if(x==y)return
         console.log("parent", this.parent[x])
        if(x<y){
            this.parent[y]=x
        }else{
            this.parent[x]=y
        }
    }

    find(x){
        if(this.parent[x]!==x){
            console.log("parent un", this.parent[x])
            return this.find(this.parent[x])
        }
        return x
    }
}

console.log(new disjoint(5))
console.log(new disjoint(5).find(4))
console.log(new disjoint(5).union(1,2))
console.log(new disjoint(5).union(2,3))
console.log(new disjoint(5).union(3,4))
