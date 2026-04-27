const { expect } = require('@playwright/test');
import { test } from '../fixtures/setup'
const data = require('../configures/data.json');

const HomePage = require('../pages/HomePage');
const MoviePage = require('../pages/MoviePage');
const SeatPage = require('../pages/SeatPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Cinepolis booking flow', async ({ dashboardPg }) => {

  const home = new HomePage(dashboardPg);
  await home.selectCity(data.city);
  await home.verifyHomeLoaded();

  const movie = new MoviePage(dashboardPg);
  await movie.selectFirstMovie();
  //  API Interception.
  const seatResponse = dashboardPg.waitForResponse(response =>
    response.url().includes('seat') && response.status() === 200);

  await movie.selectShowTime();
  const seat = new SeatPage(dashboardPg);
  await seat.selectSeat();
  await seat.clickProceed();
  const checkout = new CheckoutPage(dashboardPg);

  await checkout.acceptAndContinue();
  await checkout.fillGuestDetails(data.user);

  await expect(checkout.BookingSummary()).toBeVisible();
});

test.only('User should NOT be able to select reserved seat', async ({ dashboardPg }) => {

  const home = new HomePage(dashboardPg);
   await home.selectCity(data.city);
  await home.verifyHomeLoaded();
  const movie = new MoviePage(dashboardPg);

  await movie.selectFirstMovie();
  await movie.selectShowTime();

  await expect(dashboardPg.getByText('SCREEN THIS WAY')).toBeVisible({ timeout: 20000 });

  // Find reserved seat
  const reservedSeat = dashboardPg.locator('#seat-layout-table div.reserved').first();

  await expect(reservedSeat).toBeVisible();

  await reservedSeat.click({ force: true });

  const className = await reservedSeat.getAttribute('class');
  //console.log(className)
  expect(className).toContain('reserved');
});