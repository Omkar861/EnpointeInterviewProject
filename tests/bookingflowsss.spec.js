const { test, expect } = require('@playwright/test');
const data = require('../fixtures/data.json');

const HomePage = require('../pages/HomePage');
const MoviePage = require('../pages/MoviePage');
const SeatPage = require('../pages/SeatPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Cinepolis booking flow', async ({ page }) => {

  const home = new HomePage(page);

  const movie = new MoviePage(page);

  const seat = new SeatPage(page);
  const checkout = new CheckoutPage(page);

  await home.open();

  await home.selectCity(data.city);
  await home.verifyHomeLoaded();

  await movie.selectFirstMovie();

  //  API Interception.
  const seatResponse = page.waitForResponse(response =>
  response.url().includes('seat') && response.status() === 200);

  await movie.selectShowTime();

  await seat.selectSeat();
  await seat.clickProceed();
  

  await checkout.acceptAndContinue();
  await checkout.fillGuestDetails(data.user);

  await expect(checkout.BookingSummary()).toBeVisible();
  

});

test('User should NOT be able to select reserved seat', async ({ page }) => {

  const home = new HomePage(page);
  const movie = new MoviePage(page);

  await home.open();
  await home.selectCity('Mumbai');
  await home.verifyHomeLoaded();

  await movie.selectFirstMovie();
  await movie.selectShowTime();


  await expect(page.getByText('SCREEN THIS WAY')).toBeVisible({ timeout: 20000 });

  // Find reserved seat
  const reservedSeat = page.locator('#seat-layout-table div.reserved').first();

  await expect(reservedSeat).toBeVisible();

  await reservedSeat.click({ force: true });

  const className = await reservedSeat.getAttribute('class');
  //console.log(className)
  expect(className).toContain('reserved'); 
});