let val = 1;

function add(a, b) {
    console.log(this.val + a + b);
}

let o1 = {val: 2};
let o2 = {val: 3};

add(1,2);
add.apply(o1, [1,2]);
add.apply(o2, [1,2]);
add.call(o1, 1, 2);
add.call(o2, 1, 2);
