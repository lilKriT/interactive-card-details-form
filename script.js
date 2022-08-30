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

// default values
const defaultName = "Jane Appleseed";
const defaultNumber = "0000 0000 0000 0000";
const defaultMonth = "00";
const defaultYear = "00";

const updateCardHolder = (newName) => {
  for (const name of cardNames) {
    name.textContent = newName || defaultName;
  }
};

fieldHolder.addEventListener("change", (e) => updateCardHolder(e.target.value));
