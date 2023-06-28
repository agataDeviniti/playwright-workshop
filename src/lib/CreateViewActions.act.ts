import { FrameLocator, Page } from '@playwright/test';
import { url } from '../data/data';
import iframes from '../pages/iframes.po';
import createViewPO from '../pages/createView.po';

export default class CreateViewActions {
    readonly page: Page;
    readonly iframe: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView);
    }

    async clickCreateButton(): Promise<void> {
        await this.iframe.locator(createViewPO.button.create).click();
    }

    fillFields = {
        summary: async (summary: string): Promise<void> => {
            await this.iframe.locator(createViewPO.field.summary).fill(summary);
        },
        components: async (componentValue: string): Promise<void> => {
            await this.iframe.locator(createViewPO.field.component.input).fill(componentValue);
            await this.iframe.locator(createViewPO.field.component.option).getByText(componentValue, { exact: true }).click();
        },
    };
}
