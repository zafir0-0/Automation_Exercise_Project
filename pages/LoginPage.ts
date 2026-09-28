import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginHeader: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.locator("//h2[contains(text(),'Login to your account')]");
        this.emailInput = page.locator("input[data-qa='login-email']");
        this.passwordInput = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
    }

    async expectLoginHeaderVisible() {
        await expect(this.loginHeader).toBeVisible();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
