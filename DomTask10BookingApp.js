const btn = document.querySelector('.btn');


btn.addEventListener('click', (e)=> {

    console.log('click');

});  

btn.addEventListener('mouseover', (e)=> {

document.querySelector('#my-form').style.background =

'#add8e6';

});  

btn.addEventListener('mouseout', (e)=> {

    document.querySelector('#my-form').style.background =

    '#E6ADD9';


});  

const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {

    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');// this is for color setting that caution message

        msg.innerHTML = 'please enter all fields';//this is for caution message

        setTimeout(() => msg.remove(), 3000)// after 3 second that error message will go away.

    }else {

        //if user fill all the field we want to grab the data from input field

        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


        userList.appendChild(li);


        //clear the fields

       nameInput.value = '';

       emailInput.value = '';

    }

}

// function for storing data into local storage:-

function SaveToLocalStorage(event){
    var name = event.target.name.value
    var email = event.target.email.value
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}