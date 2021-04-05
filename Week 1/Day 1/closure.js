function counter() {
    var counter = 1;
    return function x() {
        counter++;
        console.log(counter);
    }
}
var a = counter();
a();
a();
a();