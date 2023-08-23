import { test, expect } from '@playwright/test';
import { url } from '../data/data';
import navigationPagePO from '../pages/navigationPage.po';
import flexSearchViewPO from '../pages/flexSearchView.po';
import createViewPO from '../pages/createView.po';
import treeViewPO from '../pages/treeView.po';
import issueViewPO from '../pages/issueView.po';
import modalsPO from '../pages/modals.po';
import iframes from '../pages/iframes.po';

const chance = require('chance').Chance();

test('TASK-3 - add Page Objects', async ({ page }) => {
    const iframe = page.frameLocator(iframes.projectMainView);
    const summary = chance.sentence({ words: 3 });
    const componentValue = 'Account';

    await test.step('1. Przejdź do strony', async () => {
        await page.goto(url.testManagement);
    });
    await test.step('2. Zamknij spotlight', async () => {
        await iframe.locator(navigationPagePO.spotlight.button.skip).click();
    });
    await test.step('3. Wejdź do zakładki "Test Cases"', async () => {
        await iframe.locator(navigationPagePO.navigationBar.testCases).click();
    });
    await test.step('4. Kliknij folder All na drzewku', async () => {
        await iframe.locator(treeViewPO.rootFolder).click();
    });
    await test.step('5. Kliknij w przycisk "Create Test Case"', async () => {
        await iframe.locator(flexSearchViewPO.button.createTestCase).click();
    });
    await test.step('6. Uzupełnij summary i pole components (opcja: Account) na ekranie create', async () => {
        await iframe.locator(createViewPO.field.summary).fill(summary);
        await iframe.locator(createViewPO.field.component.input).fill(componentValue);
        await iframe.locator(createViewPO.field.component.option).getByText(componentValue, { exact: true }).click();
    });
    await test.step('7. Kliknij przycisk "Create"', async () => {
        await iframe.locator(createViewPO.button.create).click();
    });
    await test.step('8. Znajdź utworzony Test Case w tabeli i przejdź do niego', async () => {
        await iframe.locator(flexSearchViewPO.table.summaryColumn).getByText(summary, { exact: true }).click();
    });
    await test.step('9. Sprawdź, czy pola summary oraz components są uzupełnione', async () => {
        await expect(iframe.locator(issueViewPO.summary)).toHaveText(summary);
        await expect(iframe.locator(issueViewPO.component).getByText(componentValue, { exact: true })).toBeVisible();
    });
    await test.step('10. Usuń stworzony test case', async () => {
        await iframe.locator(treeViewPO.actions.trashIcon).click();
        await iframe.locator(modalsPO.deleteModal.button.deletePermanently).click();
    });
});