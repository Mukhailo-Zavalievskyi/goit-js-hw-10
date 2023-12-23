import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stateInput = form.querySelector('[name="state"]');
    const delay = parseInt(delayInput.value);

    const promise = new Promise((resolve, reject) => {
      if (stateInput.value === 'fulfilled') {
        setTimeout(() => resolve(delay), delay);
      } else {
        setTimeout(() => reject(delay), delay);
      }
    });

    promise.then((delay) => {
      // Виведення повідомлення при вдалому виконанні промісу
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    }).catch((delay) => {
      // Виведення повідомлення при невдалому виконанні промісу
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

    // Скидання значень полів форми
    form.reset();
  });
});
