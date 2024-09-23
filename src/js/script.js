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
  _formInputs = [
    this._form.first_name,
    this._form.last_name,
    this._form.email,
    this._form.message,
    this._form["general_enquiry"],
    this._form["support_request"],
    this._form.consent,
  ];

  constructor() {
    // console.log(this._form);
    // console.log(data);
    this.init();
  }

  init() {
    // TEST Submit Button & Showing Success Message

    // this._submitButton.addEventListener(
    //   "click",
    //   this._triggerSuccess.bind(this)
    // );

    // TEST Showing Erros on Submit
    this._submitButton.addEventListener(
      "click",
      this._validateInputs.bind(this)
    );

    // TEST Clearing Form on Submit
    // this._submitButton.addEventListener("click", this._clearInputs.bind(this));

    //More testing
    // this._addEventHandlersToInputs();
  }

  _validateInputs(e) {
    e.preventDefault();
    for (const input of this._formInputs) {
      //   input.classList.toggle("invalid");
      //   console.dir(input);

      /* Check input type, if text, if email, if radio, checkbox, etc.. 
        - have validation to pass to (helper.js or built in)
        - if true, update _data field with _data[input.name] & remove '.invalid'
        - else add .invalid to classList
       
        - Loop through _data. If all true return true , else false. 

        Will use as conditional to trigger success message. 

        Need a reset function too. 

      */

      const inputName = input.name;
      const inputType = input.type;
      const buttonInput = inputType == "radio" || inputType == "checkbox";
      const inputValue = buttonInput ? input.checked : input.value;
      let isValid;

      //   const valid = this._data.hasOwnProperty(inputName);
      //   const valid = VALIDATE[input.type](inputValue);

      //   console.dir(inputType, buttonInput);
      console.dir(input);

      if (buttonInput) {
        isValid = input.checked;
      }

      if (!buttonInput) {
        isValid =
          this._data.hasOwnProperty(inputName) &&
          VALIDATE[`${inputType || inputName}`](inputValue);
      }

      console.log(`Button Input? ${buttonInput}`);
      console.log(
        `Input name = ${inputName} | Input value = ${inputValue} | Valid? ${isValid} `
      );
    }
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

  _clearInputs(e) {
    e.preventDefault();
    for (const input of this._formInputs) {
      input.type.includes("text") && (input.value = "");
      input.type.includes("email") && (input.value = "");
      input.type.includes("checkbox") && (input.checked = false);
      input.type.includes("radio") && (input.checked = false);
    }
  }
}

const app = new SubmitForm();
