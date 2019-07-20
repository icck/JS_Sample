//let text = 2;
//console.log(isNaN(text));

let text = 'test';
if (isNaN(text)) {
    console.log('not number');
}

let value = '80';
if (! isNaN(value)) {
    console.log(parseInt(value)+80);
}

let el = '80';
if (! isNaN(el)) {
    console.log('number');
}else {
    console.log('not number');
}

let age = 9;
if (age > 10) {
    console.log('1 9');
} else if(age > 5){
    console.log('2');
}else{
    console.log('3');
}