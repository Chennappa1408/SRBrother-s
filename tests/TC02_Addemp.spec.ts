import { test } from "@playwright/test";
import { general } from "../lib/General";

test('TC02_Addemp', async ({ page }) => {
    const gen = new general(page);
    await page.waitForTimeout(3000);
    
    await gen.openApplication();
    await gen.login();
    await gen.addNewEmployee();
    console.log("Employee added successfully");
    
    await gen.logout();
    console.log("Logout is successful");
    await gen.waitForSomeTime(3000);
    //testing purpose     
});