import { test, expect } from '@playwright/test';
import { url } from '../data/data';

const chance = require('chance').Chance();

test('TASK-2 - create variables and steps', async ({ page }) => {
    const iframe = page.frameLocator('iframe[id^="com.deviniti.atlassian.apps.rtm"][id*="project-main-view"]');
    const summary = chance.sentence({ words: 3 });
    const componentValue = 'Account';

    await test.step('1. Przejdź do strony', async () => {
        await page.goto(url.testManagement);
    });
    await test.step('2. Zamknij spotlight', async () => {
        await iframe.locator('[data-testid="spotlight--dialog"] button:has-text("Skip")').click();
    });
    await test.step('3. Wejdź do zakładki "Test Cases"', async () => {
        await iframe.locator('[data-testid="Navigation-project-Test-cases"]').first().click();
    });
    await test.step('4. Kliknij folder All na drzewku', async () => {
        await iframe.locator('[data-testid="testCases-tree-ROOT"]').click();
    });
    await test.step('5. Kliknij w przycisk "Create Test Case"', async () => {
        await iframe.locator('[data-testid="TC-flex-Create-TC"]').click();
    });
    await test.step('6. Uzupełnij summary i pole components (opcja: Account) na ekranie create', async () => {
        await iframe.locator('[data-testid="field-summary"] input').fill(summary);
        await iframe.locator('[data-testid="field-components"] input[type="text"]').fill(componentValue);
        await iframe.locator('[class$="-menu"] div[id*="-option-"]').getByText(componentValue, { exact: true }).click();
    });
    await test.step('7. Kliknij przycisk "Create"', async () => {
        await iframe.locator('[data-testid="TC-new-Create-button"]').click();
    });
    await test.step('8. Znajdź utworzony Test Case w tabeli i przejdź do niego', async () => {
        await iframe.locator('tbody tr td:nth-of-type(3)').getByText(summary, { exact: true }).click();
    });
    await test.step('9. Sprawdź, czy pola summary oraz components są uzupełnione', async () => {
        await expect(iframe.locator('[data-testid="field-summary"]')).toHaveText(summary);
        await expect(iframe.locator('[data-testid="field-components"]').getByText(componentValue, { exact: true })).toBeVisible();
    });
    await test.step('10. Usuń stworzony test case', async () => {
        await iframe.locator('[data-testid="testCases-tree-Delete"]').click();
        await iframe.locator('[data-testid="Remove-node-Modal-Delete"]').click();
    });
});