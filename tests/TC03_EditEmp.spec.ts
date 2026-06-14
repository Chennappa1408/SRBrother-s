import{test} from "@playwright/test";
import { general } from "../lib/General";

test('TC03_EditEmp', async ({ page }) => {

    let gen= new general(page);
    await gen.openApplication();
    console.log("Application is opened successfully");
    await gen.waitForSomeTime(3000);
    await gen.login();
    await gen.searchAndEditEmployee();
    console.log("Employee details edited successfully");
    await gen.logout();
    console.log("Logout is successful resring purpose");
    await gen.waitForSomeTime(3000);
    //this is the last statement
});
