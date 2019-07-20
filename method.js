let createMl = () => {
    console.log('hello ml');
};

createMl();

let createarg = (arg) => {
    console.log(String(arg) + 'output')
    log = `test${arg}test`
    console.log(`test${arg}test`)
};

createarg();
createarg(1234);
createarg('5678');
createarg('test');
