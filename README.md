# OrangeHRM Web Automation Framework (Playwright + TypeScript)

This repo contains a lightweight web automation framework and example test cases for OrangeHRM login:

- `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

## Project structure

- **`src/pages/`**: Page Objects (encapsulated locators + actions)
- **`src/fixtures/`**: Shared test fixtures (page objects, credentials)
- **`tests/`**: Test specs
- **`playwright.config.ts`**: Playwright runner configuration (baseURL, reporting, retries)

## Setup

1) Install dependencies:

```bash
npm install
```

2) Install Playwright browsers:

```bash
npx playwright install
```

3) Configure environment variables (optional):

```bash
cp .env.example .env
```

## Run tests

- Run all tests (headless):

```bash
npm test
```

- Run headed:

```bash
npm run test:headed
```

- Open HTML report:

```bash
npm run report
```

## Default credentials

If you don’t provide a `.env`, the tests default to:

- Username: `Admin`
- Password: `admin123`

