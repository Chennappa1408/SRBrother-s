import { test, expect } from '@playwright/test';
import { general } from '../lib/General';


test('TC06_EmpList', async ({ page }) => {
    let gen = new general(page);
    gen.openApplication();
    console.log("Application is opened successfully");
    await gen.waitForSomeTime(3000);
    await gen.login();
    await gen.listofTheEmployees();
      await gen.waitForSomeTime(300)
    console.log("List of employees is displayed successfully");
    await gen.logout();
    console.log("Logout is successful");
    await gen.waitForSomeTime(3000);
});