import { test, expect } from '@playwright/test';
import { addCommentLinkPost } from '../functions/addComment';
require('dotenv').config();

test('x', async ({ page }) => {
    const username = process.env.USER || ''
    const password = process.env.PASSWORD || ''

    await addCommentLinkPost(page,username,password,'https://www.reddit.com/r/memes/comments/1bs9gsl/thats_the_good_stuff/','Hello World')
})