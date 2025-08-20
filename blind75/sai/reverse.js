class LLNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Reverse{
    constructor() {
        this.head = null
    }
    insert(val) {
        let current
        let newNode = new LLNode(val)
        if (this.head == null) {
            this.head = newNode
            return this
        }
        current = this.head
        while (current.next !== null) {
            current = current.next
        }
        if (current.next == null) {
            current.next = newNode
            return this
        }
        console.log("this", this)
    }

    //12 min baby :) sai thanks
    delete(position) {
        let current = this.head
        let prev, count = 0, del, deleteNext
        while (current.next !== null) {
            if (count == position - 1) {
                prev = current
                del = current.next
                deleteNext = current.next.next
                del = null
                prev.next = deleteNext
            }
            current = current.next
            count++
            console.log("current", current.val, prev, count)
        }
    }

    reverse() {
        let current
        let p, q, r
        current=this.head
        p = current
        
        while (p) {
            r = q
            q = p
            p = p.next
            q.next = r
        }
        return this.head=q
    }
}

var l = new Reverse()
l.insert(1)//c
l.insert(3)//c
l.insert(5)
l.insert(7)
l.insert(9)
l.insert(15)
console.log(l.reverse())