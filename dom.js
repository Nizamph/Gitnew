//EXAMINE THE DOCUMENT OBJECT:-

console.dir(document);
console.log(document.domain);
console.log(document.URL);//we will get the link of whole html file when we click that we access to it
console.log(document.title);// we can access the title
// document.title = 124;//we can change title by using this.
console.log(document.doctype);
console.log(document.head);//grab the head element
console.log(document.body);//grabt the body;
console.log(document.all);// it will give the array of HTML collection everything thet there in dom 
console.log(document.all[10])// if the access element located in 10th index;
// document.all[10].textContent = 'hello'//change the name of the element in the in html.But it is not good method
console.log(document.forms[0]);// give the forms in the html
console.log(document.links);
console.log(document.images);

 // GET ELEMENT BY ID:-
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header')
var title = document.getElementsByClassName('title')
var main = document.getElementById('main');
console.log(headerTitle);
 headerTitle.textContent = 'hello'
 //headerTitle.innertext = "goodbye"//this is also change the content of the text but unlike textcontent is focused on styling part
console.log(headerTitle.textContent)
header.style.borderBottom = 'solid 3px #000'
var title = document.getElementsByClassName('title');

console.log(title[0])
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';