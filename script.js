const menuBtn = document.getElementById('menuBtn');
const menuItems = document.getElementById('menuItems');

menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});

// Home page 

let nameElement = document.querySelector('.name1');
let originalText = nameElement.textContent;

nameElement.addEventListener('mouseover', function() {

    nameElement.textContent = "AbhiBytes";
});

nameElement.addEventListener('mouseout', function() {
    nameElement.textContent = originalText;
});


// about page
let aboutme=document.querySelector('.AboutMe')

let originalText1=aboutme.innerHTML;

aboutme.addEventListener('mouseover', function() {

    aboutme.textContent = "Curious about who I am? Look below!";
    aboutme.style.fontSize = "50px";
    aboutme.style.color="red"
});

aboutme.addEventListener('mouseout', function() {
    aboutme.textContent = originalText1;
    aboutme.style.color=""
});

//  contacts

const scriptURL = 'https://script.google.com/macros/s/AKfycbzChccXMz_QgAolS_Cqfyy6e6RhElwwrGW7wSMDuhm_AAp9lfCKYphvKuUNcBw18H1pTA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => {
    msg.innerHTML="Message Sent Successfully"
      setTimeout(function(){
          msg.innerHTML=""
      },1000)
    form.reset()
   })
  .catch(error => console.error('Error!', error.message))
})

