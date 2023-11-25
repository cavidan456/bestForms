// form 3 js code

// deyisenller
const form = document.querySelector("form");
const title = document.getElementById("titleInp");
const price = document.getElementById("priceInp");
const description = document.getElementById("descriptionInp");
const discount = document.getElementById("discountInp");
const stock = document.getElementById("stockInp");
const quality = document.getElementById("qualityInp");
const country = document.getElementById("countryInp");
const customersCount = document.getElementById("customersCountInp");
const category = document.getElementById("categoryInp");
const city = document.getElementById("cityInp");

function postForm(e) {
  e.preventDefoult()
  axios
    .post("https://655dd2b79f1e1093c599f093.mockapi.io/products", {
      title:title.value,
      price:price.value,
      description:description.value,
      discount:discount.value,
      stock:stock.value,
      quality:quality.value,
      country:country.value,
      customersCount:customersCount.value,
      category:category.value,
      city:city.value
    })
    .then((res) => {
      console.log(res);
    });
}


form.addEventListener("submit" , postForm)