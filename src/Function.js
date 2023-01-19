///function add(x,y) {
    ///return x + y;
///}
//function add() {console.log(1)} // Function declaration statement
console.log(data)
var data = function add() {console.log(2)} // Function expression
console.log(data)
data()
console.log(data)

function test(x,y) {
    return x + +y
}
console.log(test(1,'2a'))

var hi = (function(a,b) {return a+b}(3,6))

console.log(hi)

function foo() {
    console.log("Global")
}

function boo() {
    function foo() {
        console.log("local")
    }
    foo();
}

boo() // local