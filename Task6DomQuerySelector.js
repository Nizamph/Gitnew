// // QUERY SELECTOR:-
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';//create a border under item lister

// var input = document.querySelector('input');
// input.value = 'hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// var secondChild = document.querySelector('.list-group-item:nth-child(2)')
// secondChild.style.backgroundColor = 'yellow'
// secondChild.style.color = 'coral';

// var thirdChild = document.querySelector('.list-group-item:nth-child(3)')
// thirdChild.style.backgroundColor = 'coral'
// thirdChild.style.borderBottom = 'green'
// thirdChild.style.color = 'yellow';

// //QUERY SELECTOR ALL:-
// var titles = document.querySelectorAll('.title')

// console.log(titles)

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// //TASK 6 Q1)DELIVERABLES IN  QUERY SELECTOR:-

// var items = document.querySelector('.list-group-item:nth-child(2)');
// items.style.color = 'green';


// var items = document.querySelector('.list-group-item:nth-child(3)')
// items.style.visibility = 'hidden';

// Q2)DELIVERABLES IN QUERYSELECTOR ALL:-

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}

