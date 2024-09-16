let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

stack.pop()
console.log(stack);
stack.pop()
console.log(stack);
stack.pop()
console.log(stack);
stack.pop()
console.log(stack.pop());

//reverse a string using stack

function reverseStr(str){
    let stack = []

    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
}

    let reverse = ''
    while (stack.length > 0){
        reverse += stack.pop()
    }
    return reverse
}
console.log(reverseStr('sameer'));

//balanced paranthesis check

function isBalanced(str){
    let stack = []
    for(let i = 0; i < str.length; i++){
        let char = str[i]

        if(char === '(' || char === '[' || char === '{'){
            stack.push(char)
        }else if(char === ')' || char === ']' || char === '}'){
            if(stack.length === 0 || !isMatch(stack[stack.length-1], char)){
                return false
            }
            stack.pop()
        }

    }
    return stack.length === 0
}

function isMatch(open, close){
    if(open === '(' && close === ')') return true
    if(open === '[' && close === ']') return true
    if(open === '{' && close === '}') return true
    return false
}
console.log(isBalanced('({})'));
console.log(isBalanced('({)'));


//implement stack using two queue
function Stack() {  
    this.q1 = []; // Primary queue for storing stack elements
    this.q2 = []; // Auxiliary queue for reordering elements
    this.top = null; // To keep track of the top element
    this.size = 0; // Number of elements in the stack
}

// Push an element onto the stack
Stack.prototype.push = function(value) {
    this.q1.push(value);
    this.top = value; // Update top element
    this.size++;
}

// Pop the top element from the stack
Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        throw new Error("Stack is empty");
    }
    // Move elements from q1 to q2 except the last one
    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
    }
    // Remove the top element from q1
    const poppedValue = this.q1.shift(); 
    // Update top element to the new top element (which is now in q2)
    this.top = this.q2[0] || null;
    this.size--;
    // Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
    return poppedValue;
}

// Peek at the top element of the stack
Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new Error("Stack is empty");
    }
    return this.top;
}

// Check if the stack is empty
Stack.prototype.isEmpty = function() {
    return this.size === 0;
}

// Return the number of elements in the stack
Stack.prototype.size = function() {
    return this.size;
}

let stacks = new Stack();
stacks.push(10);
stacks.push(20);
console.log(stacks.peek()); // Output: 20
console.log(stacks.pop());  // Output: 20
console.log(stacks.peek()); // Output: 10

// Sort a Stack
function sortstack(){
    let stack = [33,22,11,77,88,1,4,3];
    let tempStack = [];

    while(stack.length > 0){
        let temp = stack.pop();
        while(tempStack.length > 0 && tempStack[tempStack.length-1] > temp){
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }

    return tempStack;
}
console.log(sortstack());
