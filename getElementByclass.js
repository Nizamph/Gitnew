//FROM YOUTUBER:-
//GET ELEMENT BY  CLASS
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = '#f4f4f4' //this will give error

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';//for changing the background of whole itmes
}


//DELIVERABLES FOR TASK 4

var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green'

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}