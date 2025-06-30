class LLNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Lcycle {
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

    cyclic() {
        let fast, slow
        fast = slow = this.head
        while (fast && fast.next && fast.next.next && slow && slow.next) {
            fast = fast.next.next
            slow = slow.next
            console.log(fast.val, slow.val, "cycle detected")
            if (fast == slow) {
                console.log(fast.val, slow.val, "cycle detected")
                return true
            }
        }
    }
    createCycle() {
        this.head.next.next.next.next.next = this.head.next;
    }
    reverse(head) {
        let p, q, r
        p = head
        while (p) {
            r = q
            q = p
            p = p.next
            q.next = r
        }
        return head = q
    }

    //PERFECT
    mergeList(list1, list2) {
        if(list1==null && list2==null){
            return null
        }
        if(list1==null){
            return list2
        }else if(list2==null){
            return list1
        }
        let last, third
        last=third=null
        if (list1.val < list2.val) {
            last = third = list1
            list1 = list1.next
            last.next = null
        } else {
            last = third = list2
            list2 = list2.next
            last.next = null
        }
        console.log("last", last.val)
        while (list1 !=null && list2!=null) {
            if (list1.val < list2.val) {
                last.next = list1
                last = last.next
                list1 = list1.next
                last.next = null
            } else {
                last.next = list2
                last = last.next
                list2 = list2.next
                last.next = null
            }
             console.log("last", last)
        }
        if(list1!=null){
            last.next=list1
        }else if(list2!=null){
            last.next=list2
        }
        return third
    }
}

var l = new Lcycle()
l.insert(1)//c
l.insert(3)//c
l.insert(5)
var l2 = new Lcycle()
l2.insert(2)//c
l2.insert(4)//c
l2.insert(6)
console.log("cyclic", l.mergeList(l.head,l2.head))