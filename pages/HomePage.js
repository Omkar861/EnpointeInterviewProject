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

   QuickBook(){
    return  this.page.getByRole('button', { name: /quick book/i });
  }

  async verifyHomeLoaded() {
    await this.page.getByText('NOW SHOWING - BOOK TODAY').waitFor();
  }
  async selectQuickBookDetails(){
    await this.page.getByRole('combobox', { name: /select cinema/i }).click();
  await this.page.getByText(/CINÉPOLIS/i).nth(2).click();

  await this.page.getByRole('combobox', { name: 'Select Movie' }).click();
  await this.page.locator('[id="headlessui-combobox-option-:r8:"]').click();

  await this.page.getByRole('combobox', { name: /select date/i }).click();
  await this.page.getByText(/\d+/).nth(2).click();

  await this.page.getByRole('combobox', { name: /select time/i }).click();
  await this.page.getByRole('option').click();

  }
}

module.exports = HomePage;