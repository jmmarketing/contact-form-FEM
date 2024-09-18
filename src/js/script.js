"use strict";

/* Psuedo Code
- On submit, need to get input values
- Basic validation on inputs (text (min character) / email (include @ and .))
- If all inputs valid (state object?) -> Toggle success message, & clear inputs. 

- If input invalid --> Show error message(s). 




*/
// Define all our Elements we are going to use

const form = document.querySelector("form");
const submitButton = document.querySelector(".form__submit-btn");

const successMessage = document.querySelector(".success-message");

// Test Submit Button & Showing Success Message
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  successMessage.classList.toggle("show");
});
