{
  const updateResult = (convert) => {
    result.innerText = convert.toFixed(2);
  };

  const result = document.querySelector(".js-result");

  const changeResult = () => {
    result.innerText = "0.00";Zmieniony cały kod na funkcje strzałkowej
  };

  const calculateResult = () => {
    const exchange = document.querySelector(".js-exchange");
    const amount = document.querySelector(".js-amount");

    const amountValue = amount.value;
    const exchangeValue = exchange.value;

    return amountValue / exchangeValue;
  };

  const submitForm = (event) => {
    event.preventDefault();

    const convert = calculateResult();
    updateResult(convert);
  };

  const init = () => {
    const reset = document.querySelector(".js-resetBtn");
    const form = document.querySelector(".js-form");

    reset.addEventListener("click", changeResult);
    form.addEventListener("submit", submitForm);
  };

  init();
}
