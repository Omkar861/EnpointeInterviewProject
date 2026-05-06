  const { test, expect } = require('../fixtures/setup');
  const data = require('../configures/data.json');
  const { interceptSeatApi, mockSeatApiFailure } = require('../utils/apiHelper');

  const MoviePage = require('../pages/MoviePage');
  const SeatPage = require('../pages/SeatPage');
  const CheckoutPage = require('../pages/CheckoutPage');



  test.describe('Positive Test Cases', () => {

    test('User can complete movie ticket booking flow', async ({ homePage }) => {
      test.slow();
      const { page, home } = homePage;
      await home.verifyHomeLoaded();

      const movie = new MoviePage(page);

      await movie.selectFirstMovie();
      const seatApi = await interceptSeatApi(page);

      await movie.selectShowTime();
      expect(seatApi.getStatus()).toBeTruthy();
      await seatApi.clear();

      const seat = new SeatPage(page);

      await seat.selectSeat();
      await seat.clickProceed();
      const checkout = new CheckoutPage(page);

      await checkout.fillGuestDetails(data.user);

      await expect(checkout.BookingSummary()).toBeVisible();
    });
    test('User can select multiple seats', async ({ homePage }) => {
      const { page } = homePage;

      const movie = new MoviePage(page);
      await movie.selectFirstMovie();
      await movie.selectShowTime();

      const seat = new SeatPage(page);

      await seat.selectMultipleSeats(2);

      // Assert 2 seats selected
      const selectedSeats = page.locator('.px-2.font-semibold');
      await expect(selectedSeats).toHaveText(/2\s*Seats/i);
    });
    
    test('Quick Book button should be enabled after selecting all fields', async ({ homePage }) => {
    const { home } = homePage;

    await home.verifyHomeLoaded();

    await home.selectQuickBookDetails();
    await expect(home.QuickBook()).toBeEnabled();
  });
  });

  test.describe('Negative Test Cases', () => {
    test('User cannot select reserved seat', async ({ homePage }) => {
      test.slow();
      const { page, home } = homePage;
      await home.verifyHomeLoaded();
      const movie = new MoviePage(page);
      await movie.selectFirstMovie();
      await movie.selectShowTime();

      const seat = new SeatPage(page);


      await seat.clickReservedSeat();

      // Assertion 1
      await expect(page.getByText(/0\s*seat/i)).toBeVisible();

      // Assertion 2
      const selectedSeats = page.locator('.selected, .seat-selected');
      await expect(selectedSeats).toHaveCount(0);
    });


    test.only('User can cancel transaction and return to showtime page', async ({ homePage }) => {
      test.slow();
      const { page, home } = homePage;

      await home.verifyHomeLoaded();

      const movie = new MoviePage(page);

      await movie.selectFirstMovie();

      await movie.selectShowTime();


      const seat = new SeatPage(page);

      await seat.selectSeat();
      await seat.clickProceed();
      const checkout = new CheckoutPage(page);
      await expect(page.getByRole('button', { name: /continue as guest/i }).first()).toBeVisible({ timeout: 20000 });
      await checkout.CancelTransation();
      await expect(page.getByText('SELECT DATE')).toBeVisible();

    });

    test('Quick Book button is disabled by default', async ({ homePage }) => {
      const { home } = homePage;

      await home.verifyHomeLoaded();

      await expect(home.QuickBook()).toBeDisabled();
    });

    test('User cannot proceed when seat API fails', async ({ homePage }) => {
      const { page } = homePage;

      const movie = new MoviePage(page);
      await movie.selectFirstMovie();

      await mockSeatApiFailure(page);

      await movie.selectShowTime();
      const seat = new SeatPage(page);
      await seat.verifySeatApiFailureState();
      await seat.clearSeatApiRoute();
    });
  });
