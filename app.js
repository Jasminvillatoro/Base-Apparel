// DOM elements
const form = document.querySelector('#form');
const emailInput = document.getElementById('input');
const text = document.getElementById('p-error');
const errorIcon = document.querySelector('.error-icon');

// function used to validate email regular expression format
// takes in email and test the format
function ValidateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// listening for submit event if true it will let the user know email is correct. However if it's false it will let user know the email is incorrect

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (ValidateEmail(emailInput.value)) {
    text.innerHTML = 'valid email';
    text.classList.remove('hidden');
    text.classList.add('correct-message');
  } else {
    text.classList.remove('hidden');
    text.innerHTML = 'invalid email';
    errorIcon.classList.remove('hidden');
    text.classList.add('error-message');
  }
});

// Test Emails
/*  
Owner.me..7080@abcd.com 
brillovi#gmail.com
Inownzsite()&@abcd.com 
Ourwebsiteismne.azbyz.com
@youmenandwe.we.net
Younourmetd345@abcd.b
johndoe@gmail.com
Johndoe_321@gmail.com
john.smith@example.com
example@mail.com
*/
