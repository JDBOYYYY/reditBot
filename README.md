# RedditBot

This repository contains code that enables the addition of comments to any specified post on Reddit.

We utilize Playwright and TypeScript for this automation.

## Setting Up

To run this code, you must specify a user in the `.env` file. You can find an example configuration in the `envExample` file.

## Functionality

The function `addCommentLinkPost` accepts four arguments: `username`, `password`, `redditPostUrl`, and `comment`. This allows for the customization of comments being added. It facilitates quick expansion if needed and the ability to add multiple comments simultaneously.

## Running the Code

To execute the code, use the following commands:

- `npm run addComment`: Runs the script in headless mode.
- `npm run addComment:headed`: Runs the script in headed mode, allowing you to see the browser in which the tests are running.
