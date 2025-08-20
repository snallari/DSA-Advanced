class ll {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class q {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(data) {
        let cur, curNext
        let l = new ll(data)
        if (this.head == null) {
            this.head = l
        } else {
            cur = this.head
            this.head = l
            this.head.next = cur
        }
        console.log("head", this.head)
    }

    enqueueq(data) {
        let cur, curNext
        let l = new ll(data)
        if (this.head == null) {
            this.head = l
        } else {
            cur = this.head
            while (cur.next != null) {
                cur = cur.next
            }
            if (cur.next == null) {
                cur.next = l
            }
        }
        console.log("head", this.head)
    }
    dequeue() {
        let currHead, newHead, newHeadNext
        currHead = this.head
        newHead = this.head.next
        newHeadNext = this.head.next.next
        this.head = newHead
        this.head.next = newHeadNext
        newHeadNext.prev = this.head
        console.log("head", this.head)
        return currHead
    }
}

let q1 = new q()
q1.enqueueq(1)
q1.enqueueq(2)
q1.enqueueq(3)
q1.dequeue()