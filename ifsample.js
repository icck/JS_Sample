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
