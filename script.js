{
  const form = document.querySelector(".js-form");
  const result = document.querySelector(".js-result");

  const changeResult = () => {
    result.innerText = "0.00";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const exchange = document.querySelector(".js-exchange");
    const amount = document.querySelector(".js-amount");

    const amountValue = amount.value;
    const exchangeValue = exchange.value;

    const convert = amountValue / exchangeValue;
    result.innerText = convert.toFixed(2);
  });

  const init = () => {
    const reset = document.querySelector(".js-resetBtn");
    reset.addEventListener("click", changeResult);
  };

  init();
}
