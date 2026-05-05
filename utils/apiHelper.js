const { expect } = require('@playwright/test');

async function interceptSeatApi(page) {
  let seatApiCalled = false;

  await page.route('**/*seat*', async (route) => {
    const request = route.request();

    expect(request.url().toLowerCase()).toContain('seat');

    seatApiCalled = true;

    await route.continue();
  });

  return {
    getStatus: () => seatApiCalled,
    clear: async () => await page.unroute('**/*seat*')
  };
}
async function mockSeatApiFailure(page) {
  await page.route('**/*seat*', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Seat API failed' })
    });
  });
}


module.exports = { interceptSeatApi ,mockSeatApiFailure};