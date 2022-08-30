// elements
cardNumbers = document.querySelectorAll(".card-number");
cardNames = document.querySelectorAll(".card-name");
cardDates = document.querySelectorAll(".card-date");
cardCVCs = document.querySelectorAll(".card-cvc");

// inputs
fieldHolder = document.querySelector("#cardholder");
fieldNumber = document.querySelector("#cardnumber");
fieldMonth = document.querySelector("#cardmonth");
fieldYear = document.querySelector("#cardyear");
fieldCVC = document.querySelector("#cardcvc");

for (const number of cardNumbers) {
  console.log(number.textContent);
}

const updateCardHolder = (name) => {};

fieldHolder.addEventListener("change", (e) => console.log(e.target.value));
