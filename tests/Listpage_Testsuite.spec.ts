// Test-suite for 69Batch

import { test } from '@playwright/test';
import { general } from '../lib/General';

test.describe('List of Test Suite for 69Batch', async () => {

    test('TC01_Login_Logout', async ({ page }) => {
        const gen = new general(page);
        await gen.openApplication();
        console.log("Application is opened successfully")
        await gen.login();
        console.log("Login is successful")
        await gen.waitTime(3000);
        await gen.logout();
        console.log("Logout is successful")
        await gen.waitForSomeTime(4000);
    });

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
    });
     test('TC03_EditEmp', async ({ page }) => {
        let gen = new general(page);
        await gen.openApplication();
        console.log("Application is opened successfully");
        await gen.waitForSomeTime(3000);
        await gen.login();
        await gen.searchAndEditEmployee();
        console.log("Employee details edited successfully");
        await gen.logout();
        console.log("Logout is successful");
        await gen.waitForSomeTime(3000);
    }); 
    test('TC04_DeleteEmp', async ({ page }) => {
        const gen = new general(page);
        await gen.openApplication();
        console.log("Application is opened successfully");
        await gen.waitForSomeTime(3000);
        await gen.login();
        await gen.searchAndDeleteEmployee();
        console.log("Employee is deleted successfully");
        await gen.logout();
        console.log("Logout is successful");
        await gen.waitForSomeTime(3000);
        //await gen.validateDeleteEmployee();
        await gen.waitForSomeTime(3000);
    }); 
/*     test('TC05_ResetEmpDetails', async ({ page })=>{
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
    test('TC06_EmpList', async ({ page }) => {
        let gen = new general(page);
        gen.openApplication();
        console.log("Application is opened successfully");
        await gen.waitForSomeTime(3000);
        await gen.login();
        await gen.listofTheEmployees();
        console.log("List of employees is displayed successfully");
        await gen.logout();
        console.log("Logout is successful");
        await gen.waitForSomeTime(3000);
    });
    test('TC07_Bug Reporter', async ({ page }) => {
        let gen = new general(page)
        await gen.openApplication();
        await gen.login();
        await gen.addBug();
        await gen.logout();
        await gen.waitForSomeTime(3000);
    }); */

});

