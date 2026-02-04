import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;
  readonly userDropdownName: Locator;
  readonly logoutMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.userDropdownName = page.locator('p.oxd-userdropdown-name');
    this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
  }

  async expectOnDashboard() {
    await expect(this.page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);
    await expect(this.dashboardHeading).toBeVisible();
  }

  async logout() {
    await this.userDropdownName.click();
    await this.logoutMenuItem.click();
  }
}

