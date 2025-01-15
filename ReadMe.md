# Investment Calculator

[app link](https://lohithreddyporeddy.github.io/Investment_calculator/)

This is a React-based Investment Calculator application that helps users calculate the future value of their investments based on initial investment, annual investment, expected return, and duration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Utilities](#utilities)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lohithreddyporeddy/Investment_calculator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Investment_calculator
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

To build the project for production, run:

```sh
npm run build
```

To deploy the project to GitHub pages, run:

```sh
npm run deploy
```

## Project Structure

```
.DS_Store
.gitignore
index.html
package.json
public/
src/
    .DS_Store
    App.jsx
    assets/
    components/
        Header.jsx
        Results.jsx
        UserInput.jsx
    index.css
    index.jsx
    util/
        investment.js
vite.config.js
```

## Components

### Header

The `Header` component displays the application logo and title.

### UserInput

The `UserInput` component allows users to input their investment details.

### Results

The `Results` component displays the calculated investment results in a table format.

### App

The `App` component is the main component that ties together the `Header`, `UserInput`, and `Results` components.

## Utilities

### investment.js

The `investment.js` file contains utility functions for calculating investment results and formatting currency.

## License

This project is licensed under the MIT License.
