import {test} from '@playwright/test';

import {general} from '../lib/General';


test('TC04_DeleteEmp', async ({ page }) => {

    const gen = new general(page);
    await gen.openApplication();
      await gen.waitForSomeTime(300)
    console.log("Application is opened successfully");
    await gen.waitForSomeTime(3000);
    await gen.login();
    await gen.searchAndDeleteEmployee();
      await gen.waitForSomeTime(300)
    console.log("Employee is deleted successfully");
    await gen.logout();
    console.log("Logout is successful");
  
    await gen.waitForSomeTime(3000);
    //await gen.validateDeleteEmployee();
    await gen.waitForSomeTime(3000);

});


