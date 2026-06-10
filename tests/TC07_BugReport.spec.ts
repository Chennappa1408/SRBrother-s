import { test } from '@playwright/test';

import { general } from '../lib/General';

test('TC07_Bug Reporter', async ({ page }) => {
    let gen = new general(page)
    await gen.openApplication();
    await gen.login();
      await gen.waitForSomeTime(300)
    await gen.addBug();
      await gen.waitForSomeTime(300)
    await gen.logout();
    await gen.waitForSomeTime(3000);
})