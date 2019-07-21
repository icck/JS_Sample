// let element = document.querySelector('p');
// element.innerText = 'write javascript';

let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let em  = document.querySelector('p');
btn.addEventListener('click',() =>{
    em.innerText = ipt.value;
});
