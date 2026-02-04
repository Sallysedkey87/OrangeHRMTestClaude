import { test, expect } from '../src/fixtures/test';

test.describe('OrangeHRM - Login', () => {
  test('logs in successfully with valid credentials', async ({
    loginPage,
    dashboardPage,
    creds,
  }) => {
    await loginPage.goto();
    await loginPage.login(creds.username, creds.password);
    await dashboardPage.expectOnDashboard();
  });

  test('shows an error when password is invalid', async ({
    loginPage,
    dashboardPage,
    creds,
  }) => {
    await loginPage.goto();
    await loginPage.login(creds.username, 'not-the-right-password');
    await loginPage.expectInvalidCredentialsError();
    await expect(dashboardPage.dashboardHeading).not.toBeVisible();
  });

  test('validates required fields when submitting empty form', async ({
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.submit();
    await loginPage.expectRequiredFieldErrors(2);
  });

  test('allows logout after successful login', async ({
    loginPage,
    dashboardPage,
    creds,
  }) => {
    await loginPage.goto();
    await loginPage.login(creds.username, creds.password);
    await dashboardPage.expectOnDashboard();

    await dashboardPage.logout();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.page).toHaveURL(/\/web\/index\.php\/auth\/login/);
  });
});

