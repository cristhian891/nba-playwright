// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ee-nba-test-cnba.auth.eu-west-2.amazoncognito.com/login?scope=openid+profile&response_type=code&redirect_uri=https%3A%2F%2Fmanagement.cnbal-test.consumer-dataengapis.com%2Fapi%2Foauth2%2Fidpresponse%3Fclient_name%3DOidcClient&state=c3820790c7&code_challenge_method=S256&client_id=u2q03n5t1edd9jrbke6j1k3ok&code_challenge=VaQ7smQr2Ub-YuIoo2I3sZ5Q9N-wZVLjxSKjZVdA5kc');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/ /);
});

test('Sign in into NBA', async ({ page }) => {
  await page.goto('https://ee-nba-test-cnba.auth.eu-west-2.amazoncognito.com/login?scope=openid+profile&response_type=code&redirect_uri=https%3A%2F%2Fmanagement.cnbal-test.consumer-dataengapis.com%2Fapi%2Foauth2%2Fidpresponse%3Fclient_name%3DOidcClient&state=c3820790c7&code_challenge_method=S256&client_id=u2q03n5t1edd9jrbke6j1k3ok&code_challenge=VaQ7smQr2Ub-YuIoo2I3sZ5Q9N-wZVLjxSKjZVdA5kc');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill("cpreciado@simplemachines.co.uk");
  await page.getByRole('textbox', { name: 'Password' }).fill("Brighton2024..");

  await page.getByRole('button', {name: 'Submit'}).click();

  await page.waitForSelector('#root > div.flex.h-screen.flex-row.antialiased > div > div > div:nth-child(2) > div.flex.items-center.gap-2.ml-auto > a')

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('#root > div.flex.h-screen.flex-row.antialiased > div > div > div:nth-child(2) > div:nth-child(1) > h1')).toBeVisible();
});
