# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Listpage_Testsuite.spec.ts >> List of Test Suite for 69Batch >> TC05_ResetEmpDetails
- Location: tests\Listpage_Testsuite.spec.ts:61:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ctcorphyd.com/SureshIT/login.php
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in ctcorphyd.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1   | // To provide re-usable methods/ functions and utilities related to whole application.
  2   | 
  3   | import { global } from './Global';
  4   | import { expect } from '@playwright/test';
  5   | 
  6   | export class general extends global {
  7   |     //User-define funtions/ methods
  8   |     //Open Application
  9   |     public async openApplication() {
  10  | 
> 11  |         await this.page1.goto(this.url);
      |                          ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://ctcorphyd.com/SureshIT/login.php
  12  |         console.log('Application is opened');
  13  | 
  14  |     }
  15  | 
  16  |     //Login to application.
  17  |     public async login() {
  18  |         await this.page1.locator(this.textbox_loginname).fill(this.username);
  19  |         await this.page1.locator(this.textbox_password).fill(this.password);
  20  |         await this.page1.locator(this.button_login).click();
  21  |         console.log('Login successful');
  22  | 
  23  |     }
  24  | 
  25  |     //logout from application.
  26  |     public async logout() {
  27  |         await this.page1.locator(this.link_logout).click();
  28  |          await this.page1.waitForTimeout(3000);
  29  |         console.log('Logout successful');
  30  |     }
  31  | 
  32  |     //Add employee details
  33  |     public async addNewEmployee() {
  34  |         let frame = this.page1.frameLocator(this.iframe_addemp);
  35  |         await frame.locator(this.link_addemp).click();
  36  |         await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
  37  |         await frame.locator(this.textbox_emplastname).fill(this.emplastname);
  38  |         await frame.locator(this.button_save).click();
  39  |         await this.page1.waitForTimeout(3000);
  40  |         console.log("Employee details added successfully")
  41  |     }
  42  | 
  43  |     //for waiting for some time
  44  |     public async waitForSomeTime(time: number) {
  45  |         await this.page1.waitForTimeout(time);
  46  |         console.log(`Waited for ${time} milliseconds`);
  47  |     }
  48  |     public async waitTime(time: number) {
  49  |         await this.page1.waitForTimeout(time);
  50  |         console.log(`waited for ${time} misseconds`);
  51  |     }
  52  | 
  53  |     public async searchAndDeleteEmployee() {
  54  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  55  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  56  |         await iframe.locator(this.search_empid_textbox).fill(this.deleteEmpid);
  57  |         await iframe.locator(this.button_search).click();
  58  |         await this.page1.waitForTimeout(3000);
  59  |         await iframe.locator(this.select_checkbox).check();
  60  |         await iframe.locator("//input[@value='Delete']").click();
  61  |         await this.page1.waitForTimeout(3000);
  62  |         console.log("Deleted employee details successfully");
  63  |     }
  64  | 
  65  |     public async validateDeleteEmployee() {
  66  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  67  |         //await iframe.locator(this.delete_verification_text).tohaveText("Successfully Deleted")
  68  | 
  69  |         let text = await iframe.locator(this.delete_verification_text).textContent();
  70  |         console.log("Validate text: ", text);
  71  |         //await expect(text).toHaveText(this.Expected_delete_text).
  72  | 
  73  |         console.log("Employee details deleted successfully");
  74  |     }
  75  |     public async searchAndEditEmployee() {
  76  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  77  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  78  |         await iframe.locator(this.search_empid_textbox).fill(this.empid);
  79  |         await iframe.locator(this.button_search).click();
  80  |         await this.page1.waitForTimeout(3000);
  81  |         await iframe.locator(this.select_checkbox).check();
  82  |         await iframe.locator(this.link_Empdetails).click();
  83  |         await iframe.locator(this.button_Edit_empdetails).click();
  84  |         await iframe.locator(this.firstname_textbox).clear();
  85  |         await iframe.locator(this.firstname_textbox).fill(this.Edited_empfirstname);
  86  |         await iframe.locator(this.lastname_textbox).clear();
  87  |         await iframe.locator(this.lastname_textbox).fill(this.Edited_emplastname);
  88  |         await iframe.locator(this.button_save_empdetails).click();
  89  |         await this.page1.waitForTimeout(3000);
  90  |         console.log("Edited employee details successfully");
  91  |     }
  92  | 
  93  |     public async resetEmployeeDetails() {
  94  |         let iframe = this.page1.frameLocator(this.iframe_Empdetails_page);
  95  |         await iframe.locator(this.search_empid_dropdown).selectOption({ value: "0" });
  96  |         await iframe.locator(this.search_empid_textbox).fill(this.reset_empid);
  97  |         await iframe.locator(this.button_search).click();
  98  |         await this.page1.waitForTimeout(3000);
  99  |         await iframe.locator(this.select_checkbox).check();
  100 |         await iframe.locator(this.button_reset_empdetails).click();
  101 |         await this.page1.waitForTimeout(3000);
  102 |         console.log("Reset employee details successfully");
  103 |     }
  104 |     public async listofTheEmployees() {
  105 |         await this.page1.getByText(this.PIM_module_text).hover();
  106 |         await this.page1.waitForTimeout(3000);
  107 |         console.log("Mouseover PIM module has been completed")
  108 |         //Click on Add emplyee sub menu tab
  109 |         await this.page1.getByText(this.Add_employee_text).click();
  110 |         console.log("Clicking on Add employee option on PIM Module")
  111 |         await this.page1.waitForTimeout(3000);
```