"use strict";

// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//    console.log(this);
//     if(this.readyState === 4){
//        console.log("request response is: 0", request.response);
//     }
// }
// request.open("GET", "https://api.chucknorris.io/jokes/random?category=dev");
// request.send();
// console.log("request is: ", request);

function fetchTheQuote(category) {
    const fetchRequest = fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(function (response) {
        console.log("Fetch Request", fetchRequest);
        return response.json();
    }).then(function (data) {
        updateQuote(data);
    });
}

function fetchTheCategories() {
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("category data is: ", data);
            updateCategories(data);
        });
}
const chuckQuoteEl = document.querySelector("#chuckQuote");
const quoteButton = document.querySelector("#getQuote");

function updateQuote(dataFromFetch) {
    const theQuote = dataFromFetch.value;
    console.log(theQuote);
    chuckQuote.innerText = theQuote;
}


function updateCategories(categoryData) {
    const categoryListForm = document.querySelector("#categoryList");
    const selectElement = document.createElement("select");
    categoryData.forEach(function (category) {
        const categoryOptionElement = document.createElement("option");
        categoryOptionElement.value = category;
        categoryOptionElement.text = category;
        selectElement.appendChild(categoryOptionElement);
    });
    categoryListForm.appendChild(selectElement);

    selectElement.addEventListener("change", function (event) {
        const categoryName = event.target.value;
        fetchTheQuote(categoryName);
    });

}
quoteButton.addEventListener("click", function () {
    fetchTheQuote();
})

fetchTheQuote("dev");
fetchTheCategories();
