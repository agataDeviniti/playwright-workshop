import { test } from '@playwright/test';
import RtmActionsContainer from '../lib/ActionsContainer.act';

const chance = require('chance').Chance();

test('TASK-5 - add Containers', async ({ page }) => {
    const summary = chance.sentence({ words: 3 });
    const componentValue = 'Account';

    const actionsContainer = new RtmActionsContainer(page);
    const { navigationActions, treeViewActions, flexSearchViewActions, createViewActions, issueViewActions } = actionsContainer;

    await test.step('1. Przejdź do strony', async () => {
        await navigationActions.navigateToTestManagement();
    });
    await test.step('2. Zamknij spotlight', async () => {
        await navigationActions.skipSpotlightDialog();
    });
    await test.step('3. Wejdź do zakładki "Test Cases"', async () => {
        await navigationActions.navigateToView.testCases();
    });
    await test.step('4. Kliknij folder All na drzewku', async () => {
        await treeViewActions.openRootFolder();
    });
    await test.step('5. Kliknij w przycisk "Create Test Case"', async () => {
        await flexSearchViewActions.openCreateIssueView();
    });
    await test.step('6. Uzupełnij summary i pole components (opcja: Account) na ekranie create', async () => {
        await createViewActions.fillFields.summary(summary);
        await createViewActions.fillFields.components(componentValue);
    });
    await test.step('7. Kliknij przycisk "Create"', async () => {
        await createViewActions.clickCreateButton();
    });
    await test.step('8. Znajdź utworzony Test Case w tabeli i przejdź do niego', async () => {
        await flexSearchViewActions.findIssue(summary);
    });
    await test.step('9. Sprawdź, czy pola summary oraz components są uzupełnione', async () => {
        await issueViewActions.assertFieldIsVisible.summary(summary);
        await issueViewActions.assertFieldIsVisible.components(componentValue);
    });
    await test.step('10. Usuń stworzony test case', async () => {
        await treeViewActions.deleteIssue();
    });
});
