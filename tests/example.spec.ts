import 'dotenv/config';
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

test('Validate Login Functionality', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await homePage.open();
  await homePage.expectHomePageVisible();
  await homePage.clickSignupLogin();

  await loginPage.expectLoginHeaderVisible();
  await loginPage.login(process.env.LOGIN_EMAIL || '', process.env.LOGIN_PASSWORD || '');

  await accountPage.expectLoggedInUserVisible();
});