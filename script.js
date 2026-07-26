//Dom Element
const form = document.getElementById("akanForm");
const birthdate = document.getElementById("birthdate");
const clearBtn = document.getElementById("clearBtn");

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

const today = newDate()

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