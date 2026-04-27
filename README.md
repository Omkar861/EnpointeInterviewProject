## Introduction
Hello My name is Omkar Dalvi.
This project automates the cinepolis India movie booking flow using **Playwright with JavaScript**.

## Application Under Test

https://www.cinepolisindia.com

## Automation Scope

The automated flow covers:

- City selection
- Movie browsing
- First available movie selection
- First available showtime selection
- Seat selection
- Booking details / guest checkout flow
- Booking summary validation
- Negative validation for reserved seats

No payment is performed.

## Tech Stack

- Playwright
- JavaScript
- Page Object Model (POM)
- JSON fixtures
- Playwright reports

## Project Structure

```txt
EnpointeInterviewProject/
│
├── configures/
│   └── data.json
|
├── fixtures/
│   └── setup.js
│
├── pages/
│   ├── HomePage.js
│   ├── MoviePage.js
│   ├── SeatPage.js
│   └── CheckoutPage.js
│
├── tests/
│   └── bookingflowsss.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

## Test Scenarios Covered

### 1. Positive Scenario

**cinepolis booking flow**

This test verifies that a user can:

1. Open the cinepolis India website
2. Select a city
3. Select the first available movie
4. Select the first available showtime
5. Select an available seat
6. Proceed to guest details
7. Fill guest details
8. Verify booking details are displayed

### 2. Negative Scenario

**User should NOT be able to select reserved seat**

This test verifies that reserved seats remain reserved and cannot be selected by the user.

## API Interception

The positive flow includes API response monitoring before selecting the showtime:

```js
const seatResponse = page.waitForResponse(response =>
  response.url().includes('seat') && response.status() === 200
);
```

This helps validate that the seat-related API responds successfully during the booking flow.

## Fixtures / Setup File

setup are stored in:

```txt
fixtures/setup.js
```

Example:

```js
import {test as base} from '@playwright/test'

export const test = base.extend({
    dashboardPg: async({page},use)=>{
        await page.goto("/");

        await use(page);

        await page.close();
    }

})
```

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

## How to Run Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/bookingflowsss.spec.js
```

## Reports

Playwright HTML report is enabled.

After test execution, open the 3 types of report using:

```bash
npx playwright show-report
npx allure generate --output allure-report
npx allure open allure-report          
```


## Assumptions

- The first available movie is selected dynamically.
- The first available showtime is selected dynamically.
- The first available seat is selected based on the available seat SVG class.
- Payment flow is not automated as per assignment requirement.
- Website content such as movies, showtimes, and seats can change dynamically.

## Notes

- No hard waits should be used in the final version.
- Page Object Model is used to keep the framework clean and maintainable.
- Test data is separated from test logic using JSON fixtures.
- Playwright report and screenshots are used for debugging and result analysis.
