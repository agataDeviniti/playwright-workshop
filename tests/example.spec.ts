import { test } from '@playwright/test';

test('RTM-1 - create test case with summary and component', async ({ page }) => {
  // 1. Przejdź do strony 'https://automation-staging-deviniti.atlassian.net/projects/SZKOL?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.deviniti.atlassian.apps.rtm-test__project-main-view'

  // 2. Zamknij spotlight

  // 3. Wejdź do zakładki "Test Cases"

  // 4. Kliknij przycisk "Create Test Case"

  // 5. Uzupełnij summary i pole components (opcja: Account) na ekranie create

  // 6. Kliknij przycisk "Create"

  // 7. Znajdź utworzony Test Case w tabeli i przejdź do niego

  // 8. Sprawdź, czy pola summary oraz components są uzupełnione

});
