import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator("//a[contains(text(),'Home')]");
        this.loginLink = page.locator("//a[contains(text(),'Signup / Login')]");
    }

    async open() {
        await this.page.goto('https://www.automationexercise.com');
    }

    async expectHomePageVisible() {
        await expect(this.homeLink).toBeVisible();
    }

    async clickSignupLogin() {
        await this.loginLink.click();
    }
}
