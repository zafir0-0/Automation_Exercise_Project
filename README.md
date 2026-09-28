# Automation Exercise Playwright Project

This project contains a Playwright test suite for the Automation Exercise website, implemented using the Page Object Model (POM) pattern.

## Video Demonstration
https://github.com/user-attachments/assets/843c738d-03a2-43b0-b1b7-f7c6d98b9e2b




## Project structure

```text
automation-excercise/
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── AccountPage.ts
├── tests/
│   └── example.spec.ts
├── .env
├── package.json
├── playwright.config.ts
├── README.md
└── node_modules/
```


## Tech stack

- Playwright
- TypeScript
- dotenv

## Prerequisites

- Node.js installed
- npm installed

## Installation

```bash
npm install
```

## Environment variables

Create a `.env` file in the project root with your Automation Exercise credentials:

```env
LOGIN_EMAIL=your_email@example.com
LOGIN_PASSWORD=your_password
```

## Run tests

Run the test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Generate the HTML report:

```bash
npx playwright show-report
```

## Current coverage

This project currently validates the login flow:

1. Open the home page
2. Navigate to Signup / Login
3. Enter login credentials
4. Submit the login form
5. Verify that the logged-in user state is visible
