const priceInputs = document.querySelectorAll('.price__input');

priceInputs.forEach((input) => {
  console.log(input.dataset.value);
});
