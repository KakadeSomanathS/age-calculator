const inputDate = document.querySelector("#date-input");
const calculateBtn = document.querySelector("#calculateBtn");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const birthDate = new Date(inputDate.value);
const currentDate = new Date();

calculateBtn.addEventListener("click", () => {
  const birthYear = birthDate.getFullYear() - currentDate.getFullYear();
  year.textContent = birthYear;
  const birthMonth = birthDate.getMonth() - currentDate.getMonth();
  month.textContent = birthMonth;
  const birthDay = birthDate.getDay() - currentDate.getDay();
  day.textContent = birthDay;
});
