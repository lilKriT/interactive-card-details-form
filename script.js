// alert("Working");

cardNumbers = document.querySelectorAll(".card-number");
cardNames = document.querySelectorAll(".card-name");
cardDates = document.querySelectorAll(".card-date");
cardCVCs = document.querySelectorAll(".card-cvc");

for (const number of cardNumbers) {
  console.log(number.textContent);
}
