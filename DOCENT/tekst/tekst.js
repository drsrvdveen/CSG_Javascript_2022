let test;

function preload() {
    test = loadStrings('word5.txt');
}

function setup() {
    console.log(test[floor(random(test.length))].toUpperCase());
}