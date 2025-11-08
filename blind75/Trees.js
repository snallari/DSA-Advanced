class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Trees {
    sum;
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        let current
        if (this.root == null) {
            this.root = newNode
            return this
        } else {
            current = this.root
            while (current !== null) {
                console.log("current", current, newNode, val)
                if (val < current.value) {
                    if (current.left == null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                } else {
                    if (current.right == null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
    }

    preOrder(root) {
        this.sum = 0
        if (root == null) {
            return null
        } else {
            if (root.left !== null) {
                this.preOrder(root.left)
            }
            if (root.right !== null) {
                this.preOrder(root.right)
            }
            if (root.left != null || root.right != null) {
                console.log("left sum", root.left, "right sum", root.right, "val sum", root.value)
                this.sum += root.value
                console.log("sum", this.sum)
            }
        }
    }

    bfs() {
        let queue = new Array()
        let current
        let bfsarray = new Array()
        queue.push(this.root)
        while (queue.length > 0) {
            current = queue.shift()
            console.log("curre", current.value)
            bfsarray.push(current.value)
            if (current.left !== null) {
                queue.push(current.left)
                console.log("current left", current.left)
            } if (current.right !== null) {
                queue.push(current.right)
                console.log("current right", current.right)
            }
        }
        console.log("bfsarray", bfsarray)
        //PERFECTO GJOB, get the queue property right
        return bfsarray
    }

    inorder(root) {
        if (root.left !== null) this.inorder(root.left)
        console.log(root.value)
        if (root.right !== null) this.inorder(root.right)
        //PERFECTO GJOB
    }

    postOrder(root) {
        if (root.left !== null) this.postOrder(root.left)
        if (root.right !== null) this.postOrder(root.right)
        console.log("post", root.value)
    }

    maxDept() {
        let queue = new Array()
        let current, count = 0
        let bfsarray = new Array()
        queue.push(this.root)
        count++
        while (queue.length > 0) {
            current = queue.shift()
            console.log("curre", current.value)
            bfsarray.push(current.value)
            if (current.left !== null) {
                queue.push(current.left)
                console.log("current left", current.left)
            } if (current.right !== null) {
                queue.push(current.right)
                console.log("current right", current.right)
            } if (current.left !== null || current.right !== null) {
                count++
            }
        }
        console.log("bfsarray", bfsarray, count)
        //PERFECTO GJOB, get the queue property right
        return count
    }

    lowestCommonAncestor(p, q, root) {
        if (root == null) return null;
        if (p === root.value || q === root.value) {
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

    invertBT(root) {
        // More explicit null check
        if (root === null || root === undefined) {
            return null
        }
        let temp = root.left
        root.left = root.right
        root.right = temp

        // Recursively invert left and right subtrees
        this.invertBT(root.left)
        this.invertBT(root.right)
        return root
    }

    maxDept(){
        if(this.root==null)return 0
        let q=[], depth=0
        q.push(this.root)
        while(q.length>0){
            console.log("dept",depth)
            let pop=q.shift()
            if(pop.left)q.push(pop.left)
            if(pop.right)q.push(pop.right)
            if(pop.left!==null || pop.right!=null){
                depth=Math.max(depth++)
            }
        }
        return depth
    }

    isSameTree(tree1, tree2){
        let left, right
        if(tree1==null && tree2==null){
            return true
        }
        if(tree1==null && tree2!==null){
            return false
        }
        if(tree1!==null && tree2==null){
            return false
        }
        if(tree1.val !== tree2.val){
            return false
        }
        left=this.isSameTree(tree1.left,tree2.left)
        right=this.isSameTree(tree1.right, tree2.right)
        return left&&right
    }

    isSubTree(root,subRoot){
        let leftSub, rightSub
        if(subRoot==null)return false
        if(this.isSameTree(root,subRoot)){return true}
        leftSub=this.isSubTree(root.left,subRoot)
        rightSub=this.isSubTree(root.right,subRoot)
        return leftSub || rightSub
    }

    //divide and conquer
    maxDepth(root){
        let lft, right
        lft=root.left ? this.maxDepth(root.left) : 0
        console.log("lft", root.left,lft);
        right=root.right ? this.maxDepth(root.right) : 0
        console.log("right", root.right,right);
        console.log("-----max", Math.max(lft,right)+1);
        return Math.max(lft,right)+1
    }
    

}
let tree = new Trees()
tree.insert(3)
tree.insert(4)
tree.insert(1)
tree.insert(2)

let treeB = new Trees()
treeB.insert(3)
treeB.insert(4)
treeB.insert(5)
treeB.insert(1)
treeB.insert(2)

let treeC = new Trees()
treeC.insert(4)
treeC.insert(1)
treeC.insert(2)

console.log("tree",tree)
// console.log("pre", tree.preOrder(tree.root))
// console.log("bfs", tree.bfs())
// console.log("in", tree.inorder(tree.root))
// console.log("post", tree.postOrder(tree.root))
// console.log("max", tree.maxDept())
// console.log("lca", tree.lowestCommonAncestor(6, 6, tree.root))
//console.log("invert", tree.invertBT(tree.root))
//console.log("maxdept", tree.maxDept())
console.log("same", tree.isSameTree(tree, treeB))
console.log("sub", tree.isSubTree(tree, treeC))
console.log("Max", tree.maxDepth(tree.root))