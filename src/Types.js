function getStringLength(str) {
    str = str || '';
    console.log(false || '');
    return str.length
}
var data = {
    name : "Hi",
    '' : '',
    age : 1,

    add1: function() {
        this.age++;
        console.log(this.age)
    }
}
data.add1()