import test from '../BaseTestCloud';

const chance = require('chance').Chance();

test('TASK-7 - add new fixture and remove test case using REST API', async ({ rtmPage, rtmRestApi }) => {
    const summary = chance.sentence({ words: 3 });
    const componentValue = 'Account';
    let testKey: string;

    await test.step('1. Przejdź do strony', async () => {
        await rtmPage.navigationActions.navigateToTestManagement();
    });
    await test.step('2. Zamknij spotlight', async () => {
        await rtmPage.navigationActions.skipSpotlightDialog();
    });
    await test.step('3. Wejdź do zakładki "Test Cases"', async () => {
        await rtmPage.navigationActions.navigateToView.testCases();
    });
    await test.step('4. Kliknij folder All na drzewku', async () => {
        await rtmPage.treeViewActions.openRootFolder();
    });
    await test.step('5. Kliknij w przycisk "Create Test Case"', async () => {
        await rtmPage.flexSearchViewActions.openCreateIssueView();
    });
    await test.step('6. Uzupełnij summary i pole components (opcja: Account) na ekranie create', async () => {
        await rtmPage.createViewActions.fillFields.summary(summary);
        await rtmPage.createViewActions.fillFields.components(componentValue);
    });
    await test.step('7. Kliknij przycisk "Create"', async () => {
        await rtmPage.createViewActions.clickCreateButton();
    });
    await test.step('8. Znajdź utworzony Test Case w tabeli i przejdź do niego', async () => {
        await rtmPage.flexSearchViewActions.findIssue(summary);
        testKey = await rtmPage.issueViewActions.getIssueKey();
    });
    await test.step('9. Sprawdź, czy pola summary oraz components są uzupełnione', async () => {
        await rtmPage.issueViewActions.assertFieldIsVisible.summary(summary);
        await rtmPage.issueViewActions.assertFieldIsVisible.components(componentValue);
    });
    await test.step('10. Usuń stworzony test case', async () => {
        await rtmRestApi.deleteIssue.deleteTC(testKey);
    });
});
