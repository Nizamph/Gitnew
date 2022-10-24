//TRVERSING THE NODE:-
 var itemList = document.querySelector('#items');
 //parentNode
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor = '#f4f4f4';//this will change the color of the form coz form is the sybling of ul
 console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'blue';
console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
console.log(itemList.childNodes);//give nodes 

console.log(itemList.children);//give html collection of elements

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow'

//firstChild
console.log(itemList.firstChild)//it will give #text coz </li> and starting of the next line's <li> is arranged in seperate row 
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1'

//lastChild
console.log(itemList.lastChild)
//firstElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4'

// nextSibling
console.log(itemList.nextSibling)
//nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling:-
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'

//createElement

//create a div

var newDiv = document.createElement('div');
//add class
newDiv.classname = 'hello';

//add Id
newDiv.id = 'hello 1'
console.log(newDiv);

//add attribute
newDiv.setAttribute('title', 'hello Div');

//create text node
var newDivText = document.createTextNode('Hello World')

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1);// adding hello world before item Lister

//ADD HELLO WORLD BEFORE ITEM 1
 
var newDiv = document.createElement('div');
newDiv.className = 'hello 1';
newDiv.id = 'hello 1';
newDiv.setAttribute('title', 'hello Div');
var newDivText = document.createTextNode('hello World');
newDiv.appendChild(newDivText);

var li = document.querySelector('li');//here we access the whole li
console.log(li.parentNode);//here we find the parentNode of li
var itemlist = li.parentNode//it is stored in a variable

var item = document.querySelector('li:nth-child(1)')//here we accessed the first element of list
console.log(item);//we check that element we took is right or wrong

itemlist.insertBefore(newDiv,li)//here we are adding new item after parentNode and before li


