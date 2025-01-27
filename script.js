const inputDate = document.querySelector("#date-input");
const calculateBtn = document.querySelector("#calculateBtn");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const birthDateValue = inputDate.value;

  if (birthDateValue === "") {
    alert("Please enter a valid past date!");
  } else {
    console.log("Success");

    const birthDate = new Date(birthDateValue);
    const currentDate = new Date();
    const dateYears = currentDate.getFullYear() - birthDate.getFullYear();

    const monthEle = birthDate.getMonth() - currentDate.getMonth();
    console.log(dateYears);
    year.textContent = dateYears;
    month.textContent = monthEle;

    const daysEle = birthDate.getDay() - currentDate.getDay();
    day.textContent = daysEle;
  }
});
