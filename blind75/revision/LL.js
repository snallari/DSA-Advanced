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
    fastslow() {
        let fast, slow;
        fast=this.head
        slow=this.head
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        if(fast==slow){
            console.log("cycle detected")
        }else{
            console.log("no cycle detected")
        }
    }

    reverse(){
        let p, q,r
        p=this.head
        while(p!=null){
            r=q
            q=p
            p=p.next
            q.next=r
        }

       let arr = []
       while (q) {
           arr.push(q.data);
           q = q.next;
       }
       return arr;
    }

    merge(list1,list2){
        let last, third, l1, l2
        l1=list1.head
        l2=list2.head
        if(l1.data<l2.data){
            third=last=l1
            l1=l1.next
            last.next=null
        }else{
            third=last=l2
            l2=l2.next
            last.next=null
        }
        console.log("last", last)
        while(l1.next!=null && l2.next != null){
            if(l1.next.data<l2.next.data){
                last.next=l1
                last=last.next
                l1=l1.next
                last.next=null
            }else{
                last.next=l2
                last=last.next
                l2=l2.next
                last.next=null
            }
        }
        console.log("last", last)
        return third
    }
}

let ll = new LL()
ll.insert(1)
ll.insert(3)
ll.insert(5)
//ll.delete(3)
ll.fastslow()
ll.reverse()
let ll1=new LL()
ll1.insert(2)
ll1.insert(4)
ll1.insert(6)
ll.merge(ll,ll1)
