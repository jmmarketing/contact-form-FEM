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
    this.init();
  }

  init() {
    this._submitButton.addEventListener(
      "click",
      this._validateInputs.bind(this)
    );
  }

  _validateInputs(e) {
    e.preventDefault();
    console.log("------NEW REQUEST -------");
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
      const isValid = buttonInput
        ? input.checked
        : this._data.hasOwnProperty(inputName) &&
          VALIDATE[`${inputType || inputName}`](inputValue);

      //   console.log(inputName, inputType, buttonInput, inputValue, isValid);

      if (!isValid && !this._data[inputName]) {
        // console.log("TRIGGERED BY --> " + input.id);
        input.classList.add("invalid");
      }

      if (isValid) {
        this._data[inputName] = isValid;
        input.classList.remove("invalid");

        if (inputType == "radio") {
          document
            .querySelectorAll('input[type="radio"]')
            .forEach((input) => input.classList.remove("invalid"));
        }
      }
    }

    if (Object.values(this._data).every((val) => val == true)) {
      this._triggerSuccess();
      this._clearInputs();
    }
  }

  _triggerSuccess() {
    this._successMessage.classList.remove("hide");
    this._successMessage.classList.add("show");

    setTimeout(() => {
      this._successMessage.classList.remove("show");
      this._successMessage.classList.add("hide");
    }, 3000);
  }

  _clearInputs() {
    for (const input of this._formInputs) {
      input.type.includes("text") && (input.value = "");
      input.type.includes("email") && (input.value = "");
      input.type.includes("checkbox") && (input.checked = false);
      input.type.includes("radio") && (input.checked = false);
    }
  }
}

const app = new SubmitForm();
