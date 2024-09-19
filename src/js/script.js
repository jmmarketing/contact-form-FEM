/* Psuedo Code
- On submit, need to get input values
- Basic validation on inputs (text (min character) / email (include @ and .))
- If all inputs valid (state object?) -> Toggle success message, & clear inputs. 

- If input invalid --> Show error message(s). 




*/
// Define all our Elements we are going to use

class SubmitForm {
  _data = {
    first_name: false,
    last_name: false,
    email: false,
    enquiry: false,
    consent: false,
  };
  _form = document.querySelector("form").elements;
  _submitButton = document.querySelector(".form__submit-btn");
  _successMessage = document.querySelector(".success-message");

  constructor() {
    console.log(this._form);
    // console.log(data);
    this.init();
  }

  init() {
    // Test Submit Button & Showing Success Message
    this._submitButton.addEventListener(
      "click",
      this._triggerSuccess.bind(this)
    );
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
