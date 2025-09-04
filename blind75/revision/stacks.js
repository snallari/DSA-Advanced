

    function validparenthisis(s){
        let sp=s.split(''), stack=[]
        for(let i=0; i<sp.length; i++){
            if(sp[i]=="(" || sp[i]=="{" || sp[i]== "["){
                stack.push(sp[i])
            }else if(stack[stack.length-1]=="(" && sp[i]==")")
            {
                stack.pop()
            }else if(stack[stack.length-1]=="[" && sp[i]=="]")
            {
                stack.pop()
            }else if(stack[stack.length-1]=="{" && sp[i]=="}")
            {
                stack.pop()
            }
            console.log("stack",stack)
        }
        return stack.length>0?false:true
    }
    console.log(validparenthisis("(){}["))
