import { Page } from '@playwright/test';
import LoginPageObjects from '../pages/LoginPage.po';
import {cloud} from '../loginCred';

const jiraUrl = new RegExp(cloud.url, 'g');
export default class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    loginPageObjects = new LoginPageObjects();

 async loginToJira(username:string, password:string) {
        await this.page.locator(this.loginPageObjects.username).fill(username);
        await this.page.locator(this.loginPageObjects.submitButton).click();
        await this.page.locator(this.loginPageObjects.password).fill(password);
        await this.page.locator(this.loginPageObjects.submitButton).click();
        await this.page.waitForEvent('domcontentloaded');
        await this.page.waitForURL(jiraUrl, { timeout: 10000 });
    }

}