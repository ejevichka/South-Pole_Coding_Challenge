import { test, expect } from "@playwright/test";

/** replace with env vars if needed */
const LOCAL_HOST_URL = "http://localhost:3000/";
const CALCULATE_TEXT = "CALCULATE YOUR FOOTPRINT";

test.beforeEach(async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
});

test.describe('FlightForm', () => {

  test("should shown home page", async ({ page }) => {

    await expect(page.getByTestId('heading_h1')).toHaveText([
      CALCULATE_TEXT
    ]);
  })

  test('submits the form correctly', async ({ page }) => {
    // Fill in the form fields
    const autocompleteFrom = await page.waitForSelector('div[data-testid="autocomplete-From"] input');
    await autocompleteFrom.focus();
    await page.keyboard.type('Hamad International Airport');
    

    const autocompleteTo = await page.waitForSelector('div[data-testid="autocomplete-To"] input');
    await autocompleteTo.focus();
    await page.keyboard.type('Hamad International Airport');

    // Submit the form
    const submitButton = await page.getByTestId('submit-flight')
    await submitButton.focus();
   

    // Assert the results
    await page.getByTestId('[data-testid="results"]');
    const resultsText = await page.getByTestId('TotalAmountCO2-results');
    const animated = await page.getByTestId('animated');
    expect(resultsText).toBeVisible;
    expect(animated).toBeVisible;
  })
});