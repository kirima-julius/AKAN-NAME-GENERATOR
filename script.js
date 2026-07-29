//Dom Element
const form = document.getElementById("akanForm");
const birthdate = document.getElementById("birthdate");
const clearBtn = document.getElementById("clearBtn");
//finds an HTML element using its id so that JavaScript can work with it.

const result = document.getElementById("resultContainer");
const akanName = document.getElementById("akanNameDisplay");
const dayText = document.getElementById("dayDisplay");

const dateError = document.getElementById("dateError");
const genderError = document.getElementById("genderError");


// ARRAYS
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];

const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];

//Limit Date  PREVENT FUTURE DATES 

const today = new Date()

birthdate.max = today.toISOString().split("T")[0];

//Leap Year Function

function isLeapYear (year) {
  return (year % 400 === 0  || year % 4 === 0 && year % 100 !== 0)
}

//Days in Month

function getDaysInMonth (month, year) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29
  }

  return days[month - 1]
}

//Validation

function validateInput(dateInput, genderInput) {
  dateError.textContent = "";
  genderError.textContent = "";

  if (birthdate === "") {
    dateError.textContent = "Please choose your birthdate.";
    alert("Please choose your birthdate.");
    return false
  }

  if (genderInput === null) {
    genderError.textContent = "Please select your gender.";
    alert("Please select your gender.");
    return false
  }

  const values = dateInput.split("-");
  const year = Number(values[0]);
  const month = Number(values[1]);
  const day = Number(values[2]);


  if (year < 1900) {
    dateError.textContent = "Please enter a valid birth year .";
    alert("Please enter a valid birth year.");
    return false;
  }

  //Validating day
  const maxDay = getDaysInMonth(month, year);

  if (day < 1 || day > maxDay) {
    dateError.textContent = "Please enter a valid date.";
    alert("Please enter a valid date.");
    return false;
  }

  //Validate future Date
                    //creates a Date object using the user's birthday.
  const enteredDate = new Date(year, month - 1, day);

  if (enteredDate > today) {
    dateError.textContent = "Birthdate cannot be in the future.";
    alert("Birthdate cannot be in the future.");
    return false;
  }

  return true;

}

// CALCULATE DAY
function calculateDay(day, month, year) {

  //First two digits of the year
  const CC = Math.floor(year / 100);
  //Last two digits of the year
  const YY = year % 100;

  let dayIndex =
    (
      Math.floor(CC / 4) -
      (2 * CC) -
      1 +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day
    ) % 7;

  if (dayIndex < 0) {
    dayIndex = dayIndex + 7;
  }

  return dayIndex;
}

// GET AKAN NAME
function getAkanName(dayIndex, gender) {

  if (gender === "male") {
    return maleNames[dayIndex];
  }

  return femaleNames[dayIndex];
}


// DISPLAY RESULT
function displayResult(dayIndex, name) {

  dayText.textContent = "You were born on " + weekDays[dayIndex] + ".";

  akanName.textContent = name;

  result.classList.remove("hidden");
}

// CLEAR FORM
function clearForm() {

  form.reset();

  dateError.textContent = "";
  genderError.textContent = "";

  result.classList.add("hidden");
}

//SUBMIT
form.addEventListener("submit", function(event) {

  event.preventDefault();

  const dateInput = birthdate.value;

  const genderInput = document.querySelector(
    'input[name="gender"]:checked'
  );

  if (validateInput(dateInput, genderInput) === false) {
    return;
  }

  const values = dateInput.split("-");

  const year = Number(values[0]);
  const month = Number(values[1]);
  const day = Number(values[2]);

  const dayIndex = calculateDay(day, month, year);

  const name = getAkanName(dayIndex, genderInput.value);

  displayResult(dayIndex, name);
});


// CLEAR BUTTON
clearBtn.addEventListener("click", clearForm);

