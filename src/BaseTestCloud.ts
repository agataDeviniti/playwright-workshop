import { test as baseTest } from '@playwright/test';
import RtmActionsContainer from './lib/ActionsContainer.act';

const test = baseTest.extend<{
    rtmPage: RtmActionsContainer;
}>({
    rtmPage: async ({ page }, use) => {
        await use(new RtmActionsContainer(page));
    },
});

export default test;
