import { chromium, FullConfig } from '@playwright/test';
import LoginPageCloud from './lib/LoginPage.act';
import { cloud } from './loginCred';

async function globalSetup(config: FullConfig) {
        const { storageState } = config.projects[0].use;
        const browser = await chromium.launch();
        const page = await browser.newPage();
        const loginPage = new LoginPageCloud(page);

        await page.goto(cloud.url);
        await loginPage.loginToJira(cloud.users.admin.username, cloud.users.admin.password);
        await page.context().storageState({ path: storageState as string });
        await browser.close();
}

export default globalSetup;