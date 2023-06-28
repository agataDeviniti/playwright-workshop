import { test, expect } from '@playwright/test';

test('TASK-1 - create first test case', async ({ page }) => {
  const iframe =  page.frameLocator('iframe[id^="com.deviniti.atlassian.apps.rtm"][id*="project-main-view"]');

  // 1. Przejdź do strony 'https://automation-staging-deviniti.atlassian.net/projects/SZKOL?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.deviniti.atlassian.apps.rtm-test__project-main-view'
  await page.goto('https://automation-staging-deviniti.atlassian.net/projects/SZKOL?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.deviniti.atlassian.apps.rtm-test__project-main-view')
 
  // 2. Zamknij spotlight
  await iframe.locator('[data-testid="spotlight--dialog"] button:has-text("Skip")').click()

  // 3. Wejdź do zakładki "Test Cases"
  await iframe.locator('[data-testid="Navigation-project-Test-cases"]').first().click()

  // 4. Kliknij folder All na drzewku
  await iframe.locator('[data-testid="testCases-tree-ROOT"]').click();

  // 5. Kliknij w przycisk "Create Test Case"
  await iframe.locator('[data-testid="TC-flex-Create-TC"]').click();

  // 6. Uzupełnij summary i pole components (opcja: Account) na ekranie create
  await iframe.locator('[data-testid="field-summary"] input').fill('My first test case');
  await iframe.locator('[data-testid="field-components"] input[type="text"]').fill('Account');
  await iframe.locator('[class$="-menu"] div[id*="-option-"]').getByText('Account', {exact: true}).click();

  /*Inne opcje:
  await iframe.locator('[class$="-menu"] div[id*="-option-"]', {hasText: "Account"}).first().click();
  await iframe.locator('[class$="-menu"] div[id*="-option-"]', {has: page.locator('text="Account"')}).first().click();
  */

  // 7. Kliknij przycisk "Create"
  await iframe.locator('[data-testid="TC-new-Create-button"]').click();

  // 8. Znajdź utworzony Test Case w tabeli i przejdź do niego
  await iframe.locator('tbody tr td:nth-of-type(3)').getByText('My first test case', {exact: true}).click();

  // 9. Sprawdź, czy pola summary oraz components są uzupełnione
  await expect(iframe.locator('[data-testid="field-summary"]')).toHaveText('My first test case')
  await expect(iframe.locator('[data-testid="field-components"]').getByText('Account', {exact:true})).toBeVisible()
  // Alternatywa: await expect(iframe.locator('[data-testid="field-components"]')).toHaveText('Account')   
  
  //10. Usuń stworzony test case
  await iframe.locator('[data-testid="testCases-tree-Delete"]').click();
  await iframe.locator('[data-testid="Remove-node-Modal-Delete"]').click();
});