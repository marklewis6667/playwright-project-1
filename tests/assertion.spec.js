import { test, expect} from '@playwright/test';

test('Assertions Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //Assertions
    //To check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    //Or can used
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }
    //To check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    //To check element enabled or disabled
    await expect(page.locator('text=Alert')).toBeEnabled()
    await expect.soft(page.locator('text=Alert')).toBeDisabled()
    //To check text value matches
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')
    //To check element attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
    //To check page URL & title
    await expect(page).toHaveURL(/.*kitchen.applitools.com/)
    await expect(page).toHaveTitle('The Kitchen')
    //To check Visual Validation with Screenshot
    await expect(page).toHaveScreenshot()

    
})  