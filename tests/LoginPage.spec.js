const { test, expect } = require('@playwright/test');

test('Login page smoke test', async ({ page }) => {
  // Open login page using the configured base URL
  await page.goto('/login');

  // Verify page title
  await expect(page).toHaveTitle(/EventHub/);

  // Verify email field is visible
  const emailField = page.getByPlaceholder('you@email.com');
  await expect(emailField).toBeVisible();

  // Verify Sign In button is visible
  await expect(page.getByRole('button',{name:'Sign In'})).toBeVisible();
});

test('Fixture page and isolated context', async ({page,browser}) => {
  // Use the built-in page fixture
  await page.goto('/login');

  const emailField = page.getByPlaceholder('you@email.com');

  // Fill email field
  await emailField.fill('beginner@sample.com');

  // Confirm the email field contains the entered value
  await expect(emailField).toHaveValue('beginner@sample.com');

  // Create a fresh, isolated browser context
  const context = await browser.newContext();

  // Create a page inside the new context
  const isolatedPage = await context.newPage();

  // Open login page using the full URL
  await isolatedPage.goto("https://eventhub.rahulshettyacademy.com/login");

  // Verify heading is visible
  await expect(isolatedPage.getByRole('heading',{name:'Sign in to EventHub'})).toBeVisible();

  // Verify email field starts empty
  const isolatedEmail = isolatedPage.getByPlaceholder('you@email.com');

  await expect(isolatedEmail).toHaveValue('');

  // Close the isolated context
  await context.close();
});