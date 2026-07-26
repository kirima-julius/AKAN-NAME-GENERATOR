# Akan Name Generator

## Author

**Julius Kirima**

---

## Project Description

Akan Name Generator is a simple web application that calculates the day of the week a user was born and assigns the corresponding Akan name based on their gender. Akan names originate from Ghanaian culture, where children are traditionally named according to the day of the week they were born.

This project demonstrates the use of JavaScript functions, arrays, control flow, operators, form handling, and input validation while providing users with an interactive and responsive experience.

---

## Features

* Calculate the day of the week from a birthdate.
* Generate the correct Akan name based on gender.
* Validate user input before processing.
* Detect leap years for accurate date validation.
* Prevent future dates from being selected.
* Display meaningful error messages for invalid input.
* Clear the form and reset the application.
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

## Project Setup Instructions

1. Clone the repository.

```bash
git clone https://github.com/YOUR_USERNAME/akan-name-generator.git
```

2. Navigate into the project folder.

```bash
cd akan-name-generator
```

3. Open the project in Visual Studio Code.

```bash
code .
```

4. Open **index.html** in your browser or use the Live Server extension.

---

## BDD (Behavior Driven Development)

| Behavior                                         | Input                  | Expected Output                       |
| ------------------------------------------------ | ---------------------- | ------------------------------------- |
| User enters a valid birthdate and selects Male   | Birthdate + Male       | Displays the correct male Akan name   |
| User enters a valid birthdate and selects Female | Birthdate + Female     | Displays the correct female Akan name |
| User submits without selecting a birthdate       | No birthdate           | Displays an error message and alert   |
| User submits without selecting a gender          | No gender              | Displays an error message and alert   |
| User enters an invalid date                      | Invalid date           | Displays an error message             |
| User enters February 29 on a non-leap year       | Invalid leap year date | Displays an error message             |
| User enters a future date                        | Future birthdate       | Displays an error message             |
| User clicks the Clear button                     | Click Clear            | Resets the form and hides the result  |

---

## Live Demo

GitHub Pages:

**Paste your deployed GitHub Pages URL here after deployment.**

Example:

```
https://YOUR_USERNAME.github.io/akan-name-generator/
```

---

## Contact Information

**Author:** Julius Kirima

Website: https://www.jukatech.com

Email:

* [info@jukatech.com](mailto:info@jukatech.com)

GitHub:

* https://github.com/julius-kirima/
* https://github.com/kirima-julius/

---

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Julius Kirima

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions of the MIT License.
