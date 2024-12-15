
function listenForValidation() {
    const REVIEW_DATA_FORM = document.getElementById("review-data-form");
    REVIEW_DATA_FORM.addEventListener("submit", validateReviewDataForm);
  }

  function validateReviewDataForm(e) {
  
    const NAME = e.target.name.value;
    const SURNAME = e.target.surname.value;
    const EMAIL = e.target.email.value;
    const REVIEW = e.target.review.value;
  
    let valid = true;
  
    if (!NAME) {
      document.getElementById("form-name").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-name").style.visibility = "hidden";

    if (!SURNAME) {
      document.getElementById("form-surname").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-surname").style.visibility = "hidden";
  
    if (!EMAIL) {
      document.getElementById("form-email").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-email").style.visibility = "hidden";
  
    if (!REVIEW) {
      document.getElementById("form-review").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-review").style.visibility = "hidden";
  
    if (!valid) {
      e.preventDefault();
    } else {
      saveData(NAME, SURNAME, EMAIL, REVIEW);
    }
  }
  
  function saveData(name, surname, email, review) {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("email", email);
    localStorage.setItem("review", review);
    console.log("validation 13.0");
  }
  
  listenForValidation();