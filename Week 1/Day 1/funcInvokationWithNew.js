function display() {
    if (new.target) {
        console.log('Function is called with new operator');
    }
    else {
        console.log('Function should be called with new operator');
    }
}

new display();

display();

