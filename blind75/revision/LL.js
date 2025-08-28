class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null
        this.tail = null
    }
    insert(val) {
        let current;
        if (this.head == null) {
            this.head = new Node(val)
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            if (current.next == null) {
                current.next = new Node(val)
            }
        }

        console.log("LL", this.head)
    }

    delete(val){
        let curr = this.head
        let prev = null
        let next=null
        while(curr.next){
            prev=curr
            curr=curr.next
            next=curr.next
            console.log("val", prev, curr, next)
            if(curr.data==val){
                prev.next=next
                curr=null
                console.log("val",this.head)
                break;
            }
        }
        return this.head
    }
}

let ll = new LL()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
ll.delete(3)
