class MoviePage {
  constructor(page) {
    this.page = page;
  }

  async selectFirstMovie() {
    await this.page.getByRole('button', { name: 'Book Tickets' }).first().click()
  }

  async selectShowTime() {
    const continueBtn = this.page.getByRole('button', { name: /continue/i });

  if (await continueBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await continueBtn.click();
  }
    await this.page.waitForLoadState();
    await this.page.getByRole('button', { name: /\d{1,2}:\d{2}(AM|PM)/ }).first().click();
  }
}

module.exports = MoviePage;