let amount = document.querySelector(".js-amount");
let result = document.querySelector(".js-result");
let exchange = document.querySelector(".js-exchange");
let form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let amountValue = amount.value;
  let exchangeValue = exchange.value;
  let convert = amountValue / exchangeValue;
  result.innerText = convert.toFixed(2);
});
