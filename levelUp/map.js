let m = new Map();

m.set('name', 'Alice');
m.set('age', 19);
m.set('sex', 'M');

console.log(m);
console.log(m.get('name'), m.get('age'));

var m2 = new Map([['hoge', 'hoge'], ['fuga', true], [123, null]]);
console.log(m2);

