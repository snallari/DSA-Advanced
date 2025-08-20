class Node {
    constructor(value) {
        this.val = value
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        let curr
        if (this.root == null) {
            this.root = newNode
        } else {
            curr = this.root
            while (curr) {
                if (val < curr.val) {
                    if (curr.left == null) {
                        curr.left = newNode
                        return this
                    } else {
                        curr = curr.left
                    }
                } else {
                    if (curr.right == null) {
                        curr.right = newNode
                        return this
                    } else {
                        curr = curr.right
                    }
                }
            }
        }
        console.log("this", this)
        return this
    }

    invert() {
        let q = []
        let pop, res = []
        q.push(this.root)
        while (q.length > 0) {
            pop = q.shift()
            res.push(pop.val)
            if (pop) {
                [pop.left, pop.right] = [pop.right, pop.left];
                if (pop.left !== null) {
                    q.push(pop.left)
                }
                if (pop.right !== null) {
                    q.push(pop.right)
                }
            }
        }
        return this.root
    }

    maxDept(node) {
        if(node==null){
            return 0
        }
        if(node.left==null && node.right==null){
            return 1
        }
        let leftdepth, rightdepth, max
        leftdepth=this.maxDept(node.left)
        rightdepth=this.maxDept(node.right)
        console.log("left", leftdepth,"right", rightdepth)
        max= Math.max(leftdepth,rightdepth)+1
        console.log("max",max)
        return max
    }

    lca(node, p, q){
        if(node==null){
            return null
        }
       if(node.val==p || node.val==q){
        return node
       }
    function traverse(node) {
       if(p<node.val && q<node.val){
        return this.traverse(node.left)
       }else if(p>node.val && q>node.val){
        return this.traverse(node.right)
       }else{
        return node
       }
    }
    return traverse(node)
    }

    maxPathSum(node){
        if(node==null){
            return 0
        }
        //get the root val 
        const res=node.val
        this.maxPathSumUtil(node, node.val);
        return res.value;
    }

    maxPathSumUtil(node,nodeval){
        if(node==null){
            return 0
        }
        let left, right
        left=this.maxPathSumUtil(node.left, nodeval)
        console.log("left", left)
        right=this.maxPathSumUtil(node.right, nodeval)
        console.log("right",right)
        totalval=Math.max(node.val, node.val+Math.max(left, right))
    }


}

var bst = new BinaryTree()
bst.insert(3)
bst.insert(9)
bst.insert(null)
bst.insert(null)
bst.insert(20)
bst.insert(15)
bst.insert(7)
console.log(bst.maxDept(bst.root))
//bst.maxPathSum(bst.root)
//bst.lca(bst.root,2,3)