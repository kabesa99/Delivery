function showData(){
    const NAME = localStorage.getItem("name");
    document.getElementById("name").innerHTML = NAME;
  
    const EMAIL = localStorage.getItem("email");
    document.getElementById("email").innerHTML = EMAIL;

    const SURNAME = localStorage.getItem("surname");
    document.getElementById("surname").innerHTML = SURNAME;

    const REVIEW = localStorage.getItem("review");
    document.getElementById("review").innerHTML = REVIEW;
  }
  
  showData();