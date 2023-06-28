import { FrameLocator, Page, expect } from '@playwright/test';
import iframes from '../pages/iframes.po';
import issueViewPO from '../pages/issueView.po';

export default class IssueViewActions {
    readonly page: Page;
    readonly iframe: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView);
    }


    assertFieldIsVisible = {
        summary: async (summary: string): Promise<void> => {
            await expect(this.iframe.locator(issueViewPO.summary)).toHaveText(summary)
        },
        components: async (componentValue: string): Promise<void> => {
            await expect(this.iframe.locator(issueViewPO.component).getByText(componentValue, {exact:true})).toBeVisible()
        },
    };
}
