import { FrameLocator, Page } from '@playwright/test';
import iframes from '../pages/iframes.po';
import treeViewPO from '../pages/treeView.po';
import modalsPO from '../pages/modals.po';

export default class TreeViewActions {
    readonly page: Page;
    readonly iframe: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView);
    }

    async openRootFolder(): Promise<void> {
        await this.iframe.locator(treeViewPO.rootFolder).click();
    }

    async deleteIssue(): Promise<void> {
        await this.iframe.locator(treeViewPO.actions.trashIcon).click();
        await this.iframe.locator(modalsPO.deleteModal.button.deletePermanently).click();  
    }
}
