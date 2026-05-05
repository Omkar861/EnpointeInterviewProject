# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingflowsss.spec.js >> Negative Test Cases >> Quick Book button is disabled by default
- Location: tests\bookingflowsss.spec.js:112:3

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.cinepolisindia.com/
Call log:
  - navigating to "https://www.cinepolisindia.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: www.cinepolisindia.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | class HomePage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.cityPopup = page.getByText('CHOOSE A CITY');
  5  |     this.citySearch = page.getByPlaceholder('Search a City');
  6  |   }
  7  | 
  8  |   async open() {
> 9  |     await this.page.goto('/');
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.cinepolisindia.com/
  10 |   }
  11 | 
  12 |   async selectCity(city) {
  13 |     await this.cityPopup.waitFor();
  14 |     await this.citySearch.fill(city);
  15 |     await this.page.getByRole('button', { name: city }).first().click();
  16 |   }
  17 | 
  18 |    QuickBook(){
  19 |     return  this.page.getByRole('button', { name: /quick book/i });
  20 |   }
  21 | 
  22 |   async verifyHomeLoaded() {
  23 |     await this.page.getByText('NOW SHOWING - BOOK TODAY').waitFor();
  24 |   }
  25 |   async selectQuickBookDetails(){
  26 |     await this.page.getByRole('combobox', { name: /select cinema/i }).click();
  27 |   await this.page.getByText(/CINÉPOLIS/i).nth(2).click();
  28 | 
  29 |   await this.page.getByRole('combobox', { name: 'Select Movie' }).click();
  30 |   await this.page.locator('[id="headlessui-combobox-option-:r8:"]').click();
  31 | 
  32 |   await this.page.getByRole('combobox', { name: /select date/i }).click();
  33 |   await this.page.getByText(/\d+/).nth(2).click();
  34 | 
  35 |   await this.page.getByRole('combobox', { name: /select time/i }).click();
  36 |   await this.page.getByRole('option').click();
  37 | 
  38 |   }
  39 | }
  40 | 
  41 | module.exports = HomePage;
```