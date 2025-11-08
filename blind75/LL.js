class LLNode{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LL{
    constructor(){
        this.head=null
    }
    insert(val){
        let current
        let newNode=new LLNode(val)
        if(this.head==null){
            this.head=newNode
            return this
        }
        current=this.head
        while(current.next!==null){
            current=current.next
        }
        if(current.next==null){
            current.next=newNode
            return this
        }
        console.log("this", this)
    }

    //12 min baby :) sai thanks
    delete(position){
        let current=this.head
        let prev, count=0, del, deleteNext
        while(current.next!==null){
            if(count==position-1){
                prev=current
                del=current.next
                deleteNext=current.next.next
                del=null
                prev.next=deleteNext
            }
            current=current.next
            count++
            console.log("current", current.val, prev, count)
        }
    }

    //fast slow pointers- fast is 2x, slow is 1x
    findMiddle(){
        let slow, fast, counter=0
        slow=fast=this.head
        while(fast!=null){
            slow=slow.next
            fast=fast.next.next
            counter++
            console.log("slow", slow.val, "fast", fast.val)
        }
        return slow.val
    }

    reverse(){
        let p, q,r
        p=this.head
        q=null
        r=null
        while(p!=null){
            r=q
            q=p
            p=p.next
            q.next=r
        }
        return q// 15 min baby :) sai thanks
    }
    concat(l1,l2){
        let current=l1.head
        while(current.next!==null){
            current=current.next
            console.log("current", current)
            if(current.next==null){
                current.next=l2.head
            }
            console.log("current", current)
         }
        // if(current.next==null){
        //     current.next=l2.head
        //     console.log("current", current)
        //     return l1
        // }
    }

    merge(l1,l2){
        let l1current=l1.head
        let l2current=l2.head
        let empty, third
        console.log("l1current", l1current, "l2current", l2current)
        if(l1current.val<l2current.val){
            third=empty=l1current
            l1current=l1current.next
            empty.next=null
        }else{
            third=empty=l2current
            l2current=l2current.next
            empty.next=null
        }
        console.log("empty new", empty)
        while(l1current!=null && l2current!=null)
        {
            if(l1current.val<l2current.val){
                empty.next=l1current
                l1current=l1current.next
                empty=empty.next
                empty.next=null
            }else{
                empty.next=l2current
                l2current=l2current.next
                empty=empty.next
                empty.next=null
            }
            console.log("empty", empty)
            console.log("l1current", l1current, "l2current", l2current)
        }
        console.log("empty resul", empty, third)
        if(l1current!=null){
            empty.next=l1current
            empty=empty.next
            empty.next=null
        }else if(l2current!=null){
            empty.next=l2current
            empty=empty.next
            empty.next=null
        }
        return third
    }

    addTwoNumbers(l1,l2){
        let c1, c2, total, newList
        c1=l1.head
        c2=l2.head
        while(c1!==null && c2!==null){
            total=c1.val+c2.val
            newList=new LLNode(total)
            newList.next=null
            c1=c1.next
            c2=c2.next
        }
        return newList
    }

}
var ll=new LL()
ll.insert(1)//c
ll.insert(3)//c
ll.insert(5)
ll.insert(7)
ll.insert(9)
ll.insert(15)
var l=new LL()
l.insert(2)//c
l.insert(4)//c
l.insert(6)
l.insert(8)
l.insert(10)
l.insert(12)
l.insert(14)
//ll.concat(ll, l)
//ll.delete(2)
//ll.findMiddle()
//ll.reverse()
//ll.merge(ll,l)
console.log('ll',ll.addTwoNumbers(ll,l))


