let f = (a, b, c) => {
    console.log(a, b, c);
}
// a few args
f('a'); // a undefined undefined
// exess args
f('a', 'b', 'c', 'd'); // a b c

// do not pass args
f(); // undefind undefind undefind

// アロー関数はarguments使えない
function f2 (a, b, c) {
    for (let p of arguments) {
        console.log(p);
    }
}

f2('a', 'b', 'c');
