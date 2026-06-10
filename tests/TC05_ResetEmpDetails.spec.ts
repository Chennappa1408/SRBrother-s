import {test} from "@playwright/test";
import { general } from '../lib/General';


test('TC05_ResetEmpDetails', async ({ page }) => {
    let gen = new general(page);
    await gen.openApplication();
    console.log("Application is opened successfully");
    await gen.waitForSomeTime(3000);
    await gen.login();
    await gen.resetEmployeeDetails();
    console.log("Employee details reset successfully");
    await gen.logout();
    console.log("Logout is successful");
    await gen.waitForSomeTime(3000);
});