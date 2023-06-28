import { FrameLocator, Page } from '@playwright/test';
import { url } from '../data/data';
import iframes from '../pages/iframes.po';
import navigationPagePO from '../pages/navigationPage.po';

export default class NavigationActions {
    readonly page: Page;
    readonly iframe: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView);
    }

    async navigateToTestManagement(): Promise<void> {
        await this.page.goto(url.testManagement)
    }

    async skipSpotlightDialog(): Promise<void> {
        await this.iframe.locator(navigationPagePO.spotlight.button.skip).click()
    }

    navigateToView = {
        testCases: async (): Promise<void> => {
            await this.iframe.locator(navigationPagePO.navigationBar.testCases).click()
        },
    };
}
