class MoviePage {
  constructor(page) {
    this.page = page;
  }

  async selectFirstMovie() {
    await this.page.getByRole('button', { name: 'Book Tickets' }).first().click()
  }

  async selectShowTime() {
    await this.page.waitForLoadState();
    await this.page.getByRole('button', { name: /\d{1,2}:\d{2}(AM|PM)/ }).first().click();
  }
}

module.exports = MoviePage;