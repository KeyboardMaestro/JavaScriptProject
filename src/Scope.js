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