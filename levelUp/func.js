let f = () => {
    return 'hoge';
};
console.log(f());


let f2 = () => {
    console.log('f2 log');
};
f2();

let f3 = (f) => {
    f();
};

f3(f2);
