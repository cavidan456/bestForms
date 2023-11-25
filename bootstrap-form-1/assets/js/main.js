// form-1 js code

const form = document.querySelector("form");
const nameInp = document.getElementById("nameInp");
const surnameInp = document.getElementById("surnameInp");
const ageInp = document.getElementById("ageInp");
const emailInp = document.getElementById("emailInp");

function userAdd(e) {
    e.preventDefault()
  axios
    .post("https://655dd2b79f1e1093c599f093.mockapi.io/users", {
      name: nameInp.value,
      surname: surnameInp.value,
      age: ageInp.value,
      email: emailInp.value
    })
    .then((res) => {
      console.log(res);
    });
}


form.addEventListener("submit", userAdd)