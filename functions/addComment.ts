import { Page } from "@playwright/test";

export async function addCommentLinkPost(page: Page, username:string, password:string, redditPostUrl:string, comment:string){
    await page.goto('https://www.reddit.com');

    await page.getByRole('button', { name: 'Accept all' }).click()
    await page.getByRole('link', { name: 'Log In' }).click()

    await page.locator('input[name="username"]').fill(username)
    await page.locator('input[name="password"]').fill(password)
    await page.getByRole('button', { name: 'Log In' }).click()
    await page.waitForTimeout(1500)
    await page.goto(redditPostUrl)
    await page.getByRole('button', { name: 'Add a comment' }).click( {force:true} )
    await page.keyboard.type(comment, { delay: 100 });
    await page.locator("//span[@slot='content']").click()
    await page.waitForTimeout(5000)
}