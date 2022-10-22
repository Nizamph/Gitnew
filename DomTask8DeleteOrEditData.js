
 var form =  document.getElementById('addForm');//here we can also use document.subquerySelector as well
 var itemsList = document.getElementById('items');// access the ul using id
 var filter = document.getElementById('filter');
// form submit event 
form.addEventListener('submit', addItem)

//Delete event
itemsList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

//get input value
var newItem = document.getElementById('item').value;

// create new li element
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create del vutton element
var deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node
deleteBtn.appendChild(document.createTextNode('X'));

//Append button to li
li.appendChild(deleteBtn);

//Appemd li to list
itemsList.appendChild(li)

//create edit button
var editBtn = document.createElement('button');

//add classes to edit button
editBtn.className = 'btn float-right'

//Append text node
editBtn.appendChild(document.createTextNode('edit'));


//edit Apppend button to li
li.appendChild(editBtn);

//li to ul:
itemsList.appendChild(li)


createBtn(li)
}

//remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
        var li = e.target.parentElement;
        itemsList.removeChild(li);
    }
   }

}

// filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
   var items =  itemsList.getElementsByTagName('li');
   //convert to an array
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else {
        item.style.display = 'none';
    }
   });
}
// adding edit button next to delete button
const ul = document.getElementById('items');
const li = ul.children;//here we will get li

function createBtn(li) {
    const editBtn = document.createElement('button');// creating button
    editBtn.className = 'Btn float-right'//align position of button by using class
    editBtn.appendChild(document.createTextNode('edit'))//add textnode as edit into the button
    li.appendChild(editBtn)//passing into li 
    return li;
}

for(var i = 0; i<li.length; i++){
   createBtn(li[i])// iterate for adding through the li for adding edit in each and every item

}