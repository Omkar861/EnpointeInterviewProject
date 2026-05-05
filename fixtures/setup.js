const base = require('@playwright/test');
const data = require('../configures/data.json');
const HomePage = require('../pages/HomePage');

exports.test = base.test.extend({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);

    await home.open();
    await home.selectCity(data.city);

    await use({ page, home });
  }
});

exports.expect = base.expect;