//GET ELEMENTS BY TAG

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.frontWeight = 'bold';
// li[1].style.background = 'yellow';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }


//TASK 5 DELIVERABLES:-
var items = document.getElementsByClassName('new-list-item');
console.log(items);
items[0].textContent = 'hello 2';
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';
items[0].style.backgroundColor = 'grey';

var li = document.getElementsByTagName('li');
console.log(li[4]);
li[4].style.color = 'yellow';
li[4].textContent = 'hello 3';
li[4].style.backgroundColor = 'blue'
