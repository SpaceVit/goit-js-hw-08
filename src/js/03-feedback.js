import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector("input[name = 'email']");
const textareaEl = document.querySelector("textarea[name = 'message']");
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(setDataToStorage, 500));
formEl.addEventListener('submit', actionsOnSubmit);

getDataFromStorage();

const userData = { email: inputEl.value, message: textareaEl.value };

function setDataToStorage(evt) {
  userData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function actionsOnSubmit(evt) {
  evt.preventDefault();

  if (inputEl.value === '' || textareaEl.value === '') {
    return alert('My dear friend, please fill in all the fields!');
  }
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getDataFromStorage() {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(dataFromStorage);

  if (dataFromStorage) {
    inputEl.value = parsedData.email;
    textareaEl.value = parsedData.message;
  }
}
// 1.отслеживаем весь текст и записываем в локалсторидж в виде обьекта при помощи стрингифай;
// 2.при сабмите очищаем все поля формы и локалсторидж;
// 3.при обновлении страницы записываем данные с локалсторидж в поля при помощи парс;
