// form-2 js code
const form = document.querySelector('form')
const userNameInp = document.getElementById('userNameInp');
const emailInp = document.getElementById('emailInp');
const passwordInp = document.getElementById('passwordInp');
const addressInp = document.getElementById('addressInp');
const countryInp = document.getElementById('countryInp');

form.addEventListener("submit" ,function(e){
  e.preventDefault()
  axios.post("https://655dd2b79f1e1093c599f093.mockapi.io/users", {
    username:userNameInp.value,
    email:emailInp.value,
    password:passwordInp.value,
    address:addressInp.value,
    country:countryInp.value
    })
    .then((res) => {
      console.log(res);
    });
});