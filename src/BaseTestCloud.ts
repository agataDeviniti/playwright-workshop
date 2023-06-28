import { test as baseTest } from '@playwright/test';
import RtmActionsContainer from './lib/ActionsContainer.act';
import RtmRestApiActions from './lib/RtmRestApiActions.act';

const test = baseTest.extend<{
    rtmPage: RtmActionsContainer;
    rtmRestApi: RtmRestApiActions;
}>({
    rtmPage: async ({ page }, use) => {
        await use(new RtmActionsContainer(page));
    },
    rtmRestApi: async ({ request }, use) => {
        await use(new RtmRestApiActions(request));
    },
});

export default test;
