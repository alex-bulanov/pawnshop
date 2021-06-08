const inputs = document.querySelectorAll('.feedback-form__input');

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value.trim().length < 1) {
      input.value = null;
      input.classList.remove('feedback-form__input--filled');
    } else {
      input.classList.add('feedback-form__input--filled');
    }
  });
});
