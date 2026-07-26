# Akan Name Generator

## Overview

The Akan Name Generator is a web application that determines the day of the week a user was born and assigns the corresponding Akan name based on their gender. Akan names originate from Ghanaian culture, where children are traditionally named according to the day of the week they are born.

The application validates user input, calculates the birth day using the required Akan day formula, and displays the appropriate Akan name.

---

## Live Demo

**GitHub Pages**



```text
https://kirima-julius.github.io/AKAN-NAME-GENERATOR/
```

---

## Repository



```text
https://github.com/kirima-julius/AKAN-NAME-GENERATOR
```

---

## Features

* Calculate the day of the week from a user's birthdate.
* Generate the correct Akan name based on gender.
* Validate birthdate and gender input.
* Detect leap years for accurate date validation.
* Prevent future dates from being selected.
* Display informative validation messages.
* Reset the form using the Clear button.
* Responsive and user-friendly interface.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Git
* GitHub
* GitHub Pages

---

## Project Structure

```text
akan-name-generator/
│
├── index.html
├── styles.css
├── script.js
├── images/
└── README.md
```

---

## Installation and Setup

Clone the repository.

```bash
git clone https://github.com/your-username/akan-name-generator.git
```

Navigate to the project folder.

```bash
cd akan-name-generator
```

Open the project in Visual Studio Code.

```bash
code .
```

Launch the project by opening `index.html` in your browser or by using the Live Server extension.

---

## Usage

1. Open the application.
2. Select your birthdate.
3. Choose your gender.
4. Click **Generate Akan Name**.
5. View your Akan name and the day of the week you were born.
6. Click **Clear** to reset the form.

---

## Behavior-Driven Development (BDD)

| Behavior                                         | Input                    | Output                                   |
| ------------------------------------------------ | ------------------------ | ---------------------------------------- |
| User enters a valid birthdate and selects Male   | Valid birthdate + Male   | Displays the correct male Akan name      |
| User enters a valid birthdate and selects Female | Valid birthdate + Female | Displays the correct female Akan name    |
| User submits without selecting a birthdate       | No birthdate             | Displays an alert and validation message |
| User submits without selecting a gender          | No gender                | Displays an alert and validation message |
| User enters an invalid date                      | Invalid date             | Displays an error message                |
| User enters February 29 on a non-leap year       | Invalid leap year date   | Displays a validation message            |
| User selects a future date                       | Future birthdate         | Displays an error message                |
| User clicks the Clear button                     | Click Clear              | Resets the form and hides the result     |

---

## Akan Naming Chart

| Day       | Male Name | Female Name |
| --------- | --------- | ----------- |
| Sunday    | Kwasi     | Akosua      |
| Monday    | Kwadwo    | Adwoa       |
| Tuesday   | Kwabena   | Abenaa      |
| Wednesday | Kwaku     | Akua        |
| Thursday  | Yaw       | Yaa         |
| Friday    | Kofi      | Afua        |
| Saturday  | Kwame     | Ama         |

---

## Formula Used

The application calculates the day of the week using the required Akan day calculation formula.

```text
d = ((CC / 4) - (2 × CC) - 1 + ((5 × YY) / 4) + ((26 × (MM + 1)) / 10) + DD) mod 7
```

Where:

| Symbol | Description                  |
| ------ | ---------------------------- |
| CC     | First two digits of the year |
| YY     | Last two digits of the year  |
| MM     | Birth month                  |
| DD     | Birth day                    |
| mod    | Modulus operator (%)         |

---

## Future Enhancements

* Add dark mode.
* Display additional information about Akan culture.
* Support multiple languages.
* Store previously generated Akan names.
* Improve accessibility features.

---

## Author

**Julius Kirima**

* Website: https://www.jukatech.com
* Email: [info@jukatech.com](mailto:info@jukatech.com)
* GitHub: https://github.com/your-username

---

## License

This project is licensed under the MIT License.

Copyright © 2026 Julius Kirima. All rights reserved.
