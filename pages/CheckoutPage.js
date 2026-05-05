class CheckoutPage {
  constructor(page) {
    this.page = page;
  }


  
  async CancelTransation(){
   await  this.page.locator(`span:has-text("Back")`).click();
   await this.page.getByText('YES', { exact: true }).click();
  }

  async fillGuestDetails(user) {

    await this.page.waitForLoadState();
    await this.page.getByPlaceholder("First Name").fill(user.firstName);
    await this.page.getByPlaceholder("Last Name").fill(user.lastName);
    await this.page.getByPlaceholder("Email").nth(1).fill(user.email);
    await this.page.getByPlaceholder("Mobile number").nth(1).fill(user.phone);
    await this.page.getByText("continue as Guest").nth(1).click();
  }

  BookingSummary() {
  return this.page.getByText('BOOKING DETAILS', { exact: true });
}
}

module.exports = CheckoutPage;