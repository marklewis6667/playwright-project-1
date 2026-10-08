import { test, expect } from '@playwright/test'

test('login test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    //await page.locator('[id="username"]').click()
    await page.locator('[id="username"]').fill('mark')
    await page.locator('[id="password"]').fill('1234')
    await page.locator('[id="log-in"]').click()

})

test.only('login test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause()
    //click action is not necessary
    //await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    //await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('link', { name: 'Time' }).click();
    await page.getByRole('row', { name: 'Alex J Morgan 2023-16-01 -' }).getByRole('button').click();
    await page.getByRole('listitem').filter({ hasText: 'Alex Morgan' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})
