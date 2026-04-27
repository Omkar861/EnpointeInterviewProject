class HomePage {
  constructor(page) {
    this.page = page;
    this.cityPopup = page.getByText('CHOOSE A CITY');
    this.citySearch = page.getByPlaceholder('Search a City');
  }

  async open() {
    await this.page.goto('/');
  }

  async selectCity(city) {
    await this.cityPopup.waitFor();
    await this.citySearch.fill(city);
    await this.page.getByRole('button', { name: city }).first().click();
  }

  async verifyHomeLoaded() {
    await this.page.getByText('NOW SHOWING - BOOK TODAY').waitFor();
  }
}

module.exports = HomePage;