const { expect } = require('@playwright/test');

class SeatPage {
  constructor(page) {
    this.page = page;


    this.seats = page.locator('#seat-layout-table div[class*="Shape.svg"]');

  }

  async clickReservedSeat() {
  const reservedSeat = this.page.locator('.reserved').first();
  await reservedSeat.click();
}

  async selectSeat() {

    await expect(this.page.getByText('SCREEN THIS WAY')).toBeVisible({ timeout: 20000 });


    await this.page.waitForLoadState('networkidle');

    const count = await this.seats.count();
  
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
    await this.page.getByRole('button', { name: 'Accept & Proceed' }).click();
    
  }

  async selectMultipleSeats(counts) {


    for (let i = 0; i < counts; i++) {
      const seat = this.seats.nth(i);
      await seat.click();
}

  }

  async verifySeatApiFailureState() {
  await expect(this.page.locator('#seat-layout-table')).toBeVisible();
  await expect(this.page.getByText(/0\s*Seats/i)).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'PROCEED' })).toBeDisabled();
}
async clearSeatApiRoute() {
  await this.page.unroute('**/*seat*');
}
}

module.exports = SeatPage;