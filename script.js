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

//Limit Date

const today = newDate()

birthdate.max = today.toISOString().split("T")[0];