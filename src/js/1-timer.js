import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

// Функція додавання ведучого нуля до значення
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// Функція конвертації мілісекунд в об'єкт з розрахованим часом
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.addEventListener('DOMContentLoaded', function () {
  let userSelectedDate; // Змінна для зберігання обраної дати

  const datetimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];

      if (userSelectedDate < new Date()) {
        // Обрано дату в минулому
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        document.querySelector('[data-start]').disabled = true;
      } else {
        // Обрано валідну дату
        document.querySelector('[data-start]').disabled = false;
      }
    },
  });

  document.querySelector('[data-start]').addEventListener('click', function () {
    const countdownInterval = setInterval(function () {
      const now = new Date().getTime();
      const timeDifference = userSelectedDate - now;

      if (timeDifference <= 0) {
        // Таймер закінчив рахувати
        clearInterval(countdownInterval);
        iziToast.success({
          title: 'Success',
          message: 'Countdown completed!',
        });
        document.querySelectorAll('.value').forEach(el => el.textContent = '00');
        document.querySelector('[data-start]').disabled = true;
      } else {
        // Оновлення інтерфейсу таймера
        const { days, hours, minutes, seconds } = convertMs(timeDifference);
        document.querySelector('[data-days]').textContent = addLeadingZero(days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
      }
    }, 1000);
  });
});