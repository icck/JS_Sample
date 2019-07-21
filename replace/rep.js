let textarea = document.querySelector('textarea');
let find = document.querySelector('#find');
let rep = document.querySelector('#rep');
let btn = document.querySelector('button');
let em = document.querySelector('p')
btn.addEventListener('click',() => {
    let findtext = find.value;
    let reptext = rep.value;
    let tagtext = textarea.value;
    findtext= new RegExp(findtext,'g');
    tagtext = tagtext.replace(findtext,reptext);
    em.innerText = tagtext;
} );
