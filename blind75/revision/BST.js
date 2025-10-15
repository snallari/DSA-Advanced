class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insertTree(value) {
        if (this.root == null) {
            this.root = new Node(value)
            return
        }
        let current = this.root
        while (current) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = new Node(value)
                    console.log("val", this)
                    return current
                }
                current = current.left
            } else {
                if (current.right == null) {
                    current.right = new Node(value)
                    return current
                }
                current = current.right
            }
        }
    }

    contains(value) {
        let current = this.root
        while (current) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else if (value == current.value) {
                console.log("Found:", current)
                return true
            }
        }
        console.log("not found:")
        return false
    }

    bfs() {
        let current, q = [], del, res = []
        current = this.root
        q.push(this.root)
        while (q.length > 0) {
            del = q.pop()
            res.push(del.value)
            if (del.left) {
                q.push(del.left)
            }
            if (del.right) {
                q.push(del.right)
            }
        }
        console.log("bfs", res)
        return res
    }

    inorder(root) {
        if (root.left != null && root.left.value < root.value)
            this.inorder(root.left)
        else
            console.log("left false", root.left);
        console.log(root.value)
        if (root.right != null && root.right.value > root.value)
            this.inorder(root.right)
        else
            console.log("right false", root.right);
    }

    invertbt() {
        let current, q = [], dele, res = [], swaped
        current = this.root
        q.push(this.root)
        while (q.length > 0) {
            dele = q.pop()
            swaped = this.swap(dele)
            res.push(swaped.value)
            if (swaped.left) {
                q.push(swaped.left)
            }
            if (swaped.right) {
                q.push(swaped.right)
            }
        }
        console.log("bfs", res)
        return res
    }

    swap(node) {
        let temp = node.left
        node.left = node.right
        node.right = temp
        return node
    }
}

var bst = new BST()
bst.insertTree(10)
bst.insertTree(5)
bst.insertTree(15)
bst.insertTree(2)
bst.insertTree(5)
bst.insertTree(13)
bst.insertTree(22)
bst.insertTree(1)
bst.insertTree(14)
bst.contains(7)
bst.inorder(bst.root)
bst.invertbt()
bst.bfs()