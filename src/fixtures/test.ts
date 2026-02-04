import { test as base, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';

export type Credentials = {
  username: string;
  password: string;
};

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  creds: Credentials;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  creds: async ({}, use) => {
    await use({
      username: process.env.ORANGEHRM_USERNAME ?? 'Admin',
      password: process.env.ORANGEHRM_PASSWORD ?? 'admin123',
    });
  },
});

export { expect };

