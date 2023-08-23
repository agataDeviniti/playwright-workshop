import { FrameLocator, Page } from '@playwright/test';
import iframes from '../pages/iframes.po';
import flexSearchViewPO from '../pages/flexSearchView.po';

export default class FlexSearchViewActions {
    readonly page: Page;
    readonly iframe: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView);
    }

    async openCreateIssueView(): Promise<void> {
        await this.iframe.locator(flexSearchViewPO.button.createTestCase).click();
    }

    async findIssue(summary:string):Promise<void> {
        await this.iframe.locator(flexSearchViewPO.table.summaryColumn).getByText(summary, { exact: true }).click();
    }
}