
var emailElem=document.getElementById('email');
var nameElem=document.getElementById('name');
var submitButtonElem=document.getElementById('submit-btn');

const myForm=document.getElementById('my-form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submitted');
    console.log(emailElem.value);
    console.log(nameElem.value);
    var nameValue=document.getElementById('name-text');
    var emailValue=document.getElementById('email-text');
    nameValue.textContent=nameElem.value;
    emailValue.textContent=emailElem.value;
})