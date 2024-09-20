/* Psuedo Code
- On submit, need to get input values
- Basic validation on inputs (text (min character) / email (include @ and .))
- If all inputs valid (state object?) -> Toggle success message, & clear inputs. 

- If input invalid --> Show error message(s). 




*/
// Define all our Elements we are going to use

import { VALIDATE } from "./helpers.js";

class SubmitForm {
  _data = {
    first_name: false,
    last_name: false,
    email: false,
    enquiry: false,
    message: false,
    consent: false,
  };
  _form = document.querySelector("form").elements;
  _submitButton = document.querySelector(".form__submit-btn");
  _successMessage = document.querySelector(".success-message");

  constructor() {
    // console.log(this._form);
    // console.log(data);
    this.init();
  }

  init() {
    // Test Submit Button & Showing Success Message

    // this._submitButton.addEventListener(
    //   "click",
    //   this._triggerSuccess.bind(this)
    // );

    this._submitButton.addEventListener(
      "click",
      this._validateInputs.bind(this)
    );

    //More testing
    // this._addEventHandlersToInputs();
  }

  _validateInputs(e) {
    e.preventDefault();
    [
      this._form.first_name,
      this._form.last_name,
      this._form.email,
      this._form.message,
      this._form["general-enquiry"],
      this._form["support-request"],
      this._form.consent,
    ].forEach((input) => {
      console.dir(input);

      /* Check input type, if text, if email, if radio, checkbox, etc.. 
        - have validation to pass to (helper.js or built in)
        - if true, update _data field with _data[input.name] & remove '.invalid'
        - else add .invalid to classList
       
        - Loop through _data. If all true return true , else false. 

        Will use as conditional to trigger success message. 

        Need a reset function too. 

      */
    });
  }

  _triggerSuccess(e) {
    e.preventDefault();
    this._successMessage.classList.remove("hide");
    this._successMessage.classList.add("show");

    setTimeout(() => {
      this._successMessage.classList.remove("show");
      this._successMessage.classList.add("hide");
    }, 3000);
  }
}

const app = new SubmitForm();
