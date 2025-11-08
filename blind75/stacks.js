class LLNod {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class stack {
  constructor() {
    this.head = null
  }

  //last in first out
  push(val) {
    let ll = new LLNod(val)
    let current
    if (this.head == null) {
      this.head = ll
    } else {
      current = this.head
      this.head = ll
      this.head.next = current
    }
    console.log("head", this.head)
    return this.head
  }
  pop() {
    let delele, newHead
    let current
    if (this.head) {
      current = this.head
      delele = current
      newHead = current.next
      this.head = newHead
      delele.next = null
      console.log("delete", this.head, "delE", delele)
      //return delele
    }
  }

  poped() {
    let delele, newHead
    let current
    if (this.head) {
      current = this.head
      delele = current
      newHead = current.next
      this.head = newHead
      delele.next = null
      console.log("delete", this.head, "delE", delele)
      return delele
    }
  }

  getParenthesis(str) {
    let strSplit = str.split("")
    let current, e
    for (let e of strSplit) {
      if (e == "(" || e == "{" || e == "[") {
        console.log("push ", e);
        this.push(e)
      }
      else {
        if (this.head == null) {
          return false
        } else {
          current = this.head
          if (e == ")" && current.data == "(") {
            console.log("pop )", current);
            this.pop()
          } else if (e == "]" && current.data == "[") {
            console.log("pop ]", current);
            this.pop()
          } else if (e == "}" && current.data == "{") {
            console.log("pop }", current);
            this.pop()
          }
          if (current.next) {
            current = current.next
          }
        }
      }

    }
    if (this.head != null) {
      console.log(this, "parenthiss")
    } else {
      console.log("match found")
    }
  }
  getInfix(str) {
    let s = str.split("")
    let res = ""
    let i = 0
    let popedVal, current
    while (i < s.length) {
      console.log("res", res, this.head, popedVal, i, s[i], current)
      if (!this.isOperator(s[i])) {
        res += s[i]
      } else {
        if (this.head == null) {
          this.push(s[i])
        }
        else {
          current = this.head
          if (this.getPrecedence(s[i]) > this.getPrecedence(this.head.data)) {
            this.push(s[i])
            current = current.next
          } else {
            popedVal = this.poped()
            res += popedVal.data
          }
        }

      }
      i++
    }
    while (this.head != null) {
      current = this.head
      popedVal = this.poped()
      res += popedVal.data
      current = current.next
    }
    console.log("res", res)
  }

  isOperator(val) {
    if (val == "+" || val == "*" || val == "-" || val == "/") {
      return true
    } else {
      return false
    }
  }

  getPrecedence(val) {
    if (val == "+" || val == "-") {
      return 1
    } else if (val == "*" || val == "/") {
      return 2
    } else {
      return 0
    }
  }

  evalRPN(tokens) {
    let stack = [], total = 0, count = 0
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
        let b = stack.pop()
        let a = stack.pop()
        console.log("ab", a, b)
        switch (tokens[i]) {
          case "+": total = a + b
            break;
          case "-": total = a - b
            break;
          case "*": total = a * b
            break;
          case "/": total = a / b
            break;
        }
        stack.push(total)
      } else {
        stack.push(Number(tokens[i]))
        console.log("stack", stack)
      }
    }
    return stack.pop()
  }

  evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
        const b = stack.pop();
        const a = stack.pop();

        let result;
        switch (token) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            // truncates toward zero
            result = Math.trunc(a / b);
            break;
        }

        stack.push(result);
      } else {
        stack.push(Number(token));
      }
    }
    return stack.pop();
  }
}

var s = new stack()
// s.push(1)
// s.push(2)
// s.push(3)
// s.push(4)
// s.pop()
//s.getParenthesis("({[()])")
s.getInfix("a/b+c*d+e+f+g*h")