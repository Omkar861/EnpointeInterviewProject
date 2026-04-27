const { expect } = require('@playwright/test');

class SeatPage {
  constructor(page) {
    this.page = page;


    this.seats = page.locator('#seat-layout-table div[class*="Shape.svg"]');

  }

  async selectSeat() {

    await expect(this.page.getByText('SCREEN THIS WAY')).toBeVisible({ timeout: 20000 });



    await this.page.waitForLoadState('networkidle');

    const count = await this.seats.count();
   // console.log('Available seats:', count);

    let seatSelected = false;

    for (let i = 0; i < count; i++) {
      const seat = this.seats.nth(i);

      try {
        if (await seat.isVisible()) {
          await seat.click();
          seatSelected = true;
          break;
        }
      } catch {}
    }

    expect(seatSelected).toBeTruthy();
  }

  async clickProceed() {
    await this.page.getByRole('button', { name: 'PROCEED' }).click();
  }
}

module.exports = SeatPage;