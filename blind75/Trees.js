class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Trees{
    sum;
    constructor(){
        this.root=null
    }
    insert(val){
        let newNode=new Node(val)
        let current
        if(this.root==null){
            this.root=newNode
            return this
        }else{
            current=this.root
            while(current !==null){
                console.log("current",current, newNode, val)
                if(val<current.value){
                    if(current.left==null){
                        current.left=newNode
                        return this
                    }
                        current=current.left
                }else{
                    if(current.right==null){
                        current.right=newNode
                        return this
                    }
                    current=current.right
                }
            }
        }
    }

    preOrder(root){
        this.sum=0
        if(root==null){
            return null
        }else{
            if(root.left!==null){
                this.preOrder(root.left)
            }
            if(root.right!==null){
            this.preOrder(root.right)
            }
            if(root.left!=null || root.right!=null){
                console.log("left sum",root.left, "right sum",root.right,"val sum", root.value)
                this.sum+=root.value
                console.log("sum",this.sum)
            }
        }
    }

    bfs(){
        let queue=new Array()
        let current
        let bfsarray=new Array()
        queue.push(this.root)
        while(queue.length>0){
            current=queue.shift()
            console.log("curre",current.value)
            bfsarray.push(current.value)
            if(current.left!==null){
                queue.push(current.left)
                console.log("current left", current.left)
            }if(current.right!==null){
                queue.push(current.right)
                console.log("current right", current.right)
            }
        }
        console.log("bfsarray", bfsarray)
          //PERFECTO GJOB, get the queue property right
          return bfsarray
    }

    inorder(root){
        if(root.left!==null)this.inorder(root.left)
        console.log(root.value)
        if(root.right!==null) this.inorder(root.right)
            //PERFECTO GJOB
    }

    postOrder(root){
        if(root.left!==null)this.postOrder(root.left)
        if(root.right!==null)this.postOrder(root.right)
        console.log("post",root.value)
    }

    maxDept(){
            let queue=new Array()
            let current, count=0
            let bfsarray=new Array()
            queue.push(this.root)
            count++
            while(queue.length>0){
                current=queue.shift()
                console.log("curre",current.value)
                bfsarray.push(current.value)
                if(current.left!==null){
                    queue.push(current.left)
                    console.log("current left", current.left)
                }if(current.right!==null){
                    queue.push(current.right)
                    console.log("current right", current.right)
                }if(current.left!==null || current.right!==null){
                    count++
                }
            }
            console.log("bfsarray", bfsarray, count)
              //PERFECTO GJOB, get the queue property right
              return count
        }

        lowestCommonAncestor(p, q, root) {
            if(root==null)return null;
            if(p===root.value || q===root.value){
                return root
            }
            function traverse(node) {
                if (p < node.value && q < node.value) {
                    console.log("left", node.left);
                    return traverse(node.left);
                } else if (p > node.value && q > node.value) {
                    console.log("right", node.right);
                    return traverse(node.right);
                } else {
                    console.log("found", node.value)
                    return node;
                }
            }
            return traverse(root)
        }

}
let tree=new Trees()
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(3)
tree.insert(7)
tree.insert(15)
tree.insert(30)
console.log(tree)
console.log("pre",tree.preOrder(tree.root))
console.log("bfs", tree.bfs())
console.log("in", tree.inorder(tree.root))
console.log("post", tree.postOrder(tree.root))
console.log("max", tree.maxDept())
console.log("lca", tree.lowestCommonAncestor(6,6, tree.root))
