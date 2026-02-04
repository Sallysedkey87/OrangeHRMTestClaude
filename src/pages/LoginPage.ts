import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidCredentialsMessage: Locator;
  readonly requiredFieldMessages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.invalidCredentialsMessage = page.getByText('Invalid credentials', {
      exact: true,
    });
    this.requiredFieldMessages = page.getByText('Required', { exact: true });
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
    await expect(this.loginButton).toBeVisible();
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  async expectInvalidCredentialsError() {
    await expect(this.invalidCredentialsMessage).toBeVisible();
  }

  async expectRequiredFieldErrors(count: number) {
    await expect(this.requiredFieldMessages).toHaveCount(count);
  }
}

