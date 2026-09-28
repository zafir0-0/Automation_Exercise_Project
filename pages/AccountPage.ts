import { expect, type Locator, type Page } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly loggedInUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedInUser = page.locator("//a[contains(text(),'Logged in as')]");
    }

    async expectLoggedInUserVisible() {
        await expect(this.loggedInUser).toBeVisible();
    }
}
