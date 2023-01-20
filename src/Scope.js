var x = 1;

function  foo() {
    var x = 10;
    console.log(x)
    bar();
}

function bar(){
    console.log(x);
}

foo()
bar()

var x1 = "Global";
function foo1() {
    console.log(x1);
    var x1 = "local";
}

foo1();
console.log(x1);