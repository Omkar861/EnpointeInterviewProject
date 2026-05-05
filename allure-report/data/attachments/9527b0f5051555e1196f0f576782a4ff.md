# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingflowsss.spec.js >> Positive Test Cases >> User can complete movie ticket booking flow
- Location: tests\bookingflowsss.spec.js:13:3

# Error details

```
Test timeout of 30000ms exceeded while setting up "homePage".
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.cinepolisindia.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - link [ref=e11] [cursor=pointer]:
          - /url: /?cid=undefined
          - img [ref=e12]
        - generic [ref=e14]:
          - link [ref=e15] [cursor=pointer]:
            - /url: /movie-list/undefined
            - text: Foovies
          - link [ref=e16] [cursor=pointer]:
            - /url: /experience
            - text: Experiences
          - link [ref=e17] [cursor=pointer]:
            - /url: /vip-screen
            - text: Cinépolis VIP
          - link [ref=e18] [cursor=pointer]:
            - /url: /bookanevent
            - text: Book An Event
          - link [ref=e19] [cursor=pointer]:
            - /url: /club-cinepolis
            - text: Club Cinépolis
          - link [ref=e20] [cursor=pointer]:
            - /url: /offers
            - text: Offers
      - generic [ref=e21]:
        - generic [ref=e23]:
          - button [ref=e26] [cursor=pointer]:
            - img [ref=e28]
            - img [ref=e31]
          - button [ref=e34] [cursor=pointer]:
            - img [ref=e36]
        - button [ref=e40] [cursor=pointer]:
          - generic [ref=e41]: Login/Signup
    - generic [ref=e42]:
      - generic [ref=e45]:
        - button [ref=e46] [cursor=pointer]: ← Previous
        - generic [ref=e48]:
          - img [ref=e52] [cursor=pointer]
          - img [ref=e56] [cursor=pointer]
          - img [ref=e60] [cursor=pointer]
          - img [ref=e64] [cursor=pointer]
          - img [ref=e68] [cursor=pointer]
          - img [ref=e72] [cursor=pointer]
        - button [ref=e73] [cursor=pointer]: → Next
        - list [ref=e74]:
          - listitem [ref=e75] [cursor=pointer]:
            - button [ref=e76]: • 1
          - listitem [ref=e77] [cursor=pointer]:
            - button [ref=e78]: • 2
      - generic [ref=e80]:
        - generic [ref=e83]:
          - combobox [ref=e84]
          - button [ref=e85] [cursor=pointer]:
            - img [ref=e86]
        - generic [ref=e90]:
          - combobox [disabled] [ref=e91]
          - button [disabled] [ref=e92]:
            - img [ref=e93]
        - generic [ref=e97]:
          - combobox [disabled] [ref=e98]
          - button [disabled] [ref=e99]:
            - img [ref=e100]
        - generic [ref=e104]:
          - combobox [disabled] [ref=e105]
          - button [disabled] [ref=e106]:
            - img [ref=e107]
        - button [disabled] [ref=e110]: Quick Book
      - generic [ref=e111]:
        - generic [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]: NOW SHOWING - BOOK TODAY
            - generic [ref=e115]:
              - img [ref=e117] [cursor=pointer]
              - button [ref=e120] [cursor=pointer]: See All
          - generic [ref=e122]:
            - generic [ref=e125] [cursor=pointer]:
              - generic [ref=e126]:
                - img [ref=e128]
                - generic [ref=e130]:
                  - button [ref=e131]
                  - button [ref=e132]
              - generic [ref=e133]:
                - heading [level=3] [ref=e134]
                - generic [ref=e135]:
                  - definition [ref=e136]
                  - generic [ref=e137]:
                    - term [ref=e138]
                    - term [ref=e139]
                - definition [ref=e140]
            - generic [ref=e143] [cursor=pointer]:
              - generic [ref=e144]:
                - img [ref=e146]
                - generic [ref=e148]:
                  - button [ref=e149]
                  - button [ref=e150]
              - generic [ref=e151]:
                - heading [level=3] [ref=e152]
                - generic [ref=e153]:
                  - definition [ref=e154]
                  - generic [ref=e155]:
                    - term [ref=e156]
                    - term [ref=e157]
                - definition [ref=e158]
            - generic [ref=e161] [cursor=pointer]:
              - generic [ref=e162]:
                - img [ref=e164]
                - generic [ref=e166]:
                  - button [ref=e167]
                  - button [ref=e168]
              - generic [ref=e169]:
                - heading [level=3] [ref=e170]
                - generic [ref=e171]:
                  - definition [ref=e172]
                  - generic [ref=e173]:
                    - term [ref=e174]
                    - term [ref=e175]
                - definition [ref=e176]
            - generic [ref=e179] [cursor=pointer]:
              - generic [ref=e180]:
                - img [ref=e182]
                - generic [ref=e184]:
                  - button [ref=e185]
                  - button [ref=e186]
              - generic [ref=e187]:
                - heading [level=3] [ref=e188]
                - generic [ref=e189]:
                  - definition [ref=e190]
                  - generic [ref=e191]:
                    - term [ref=e192]
                    - term [ref=e193]
                - definition [ref=e194]
            - generic [ref=e197] [cursor=pointer]:
              - generic [ref=e198]:
                - img [ref=e200]
                - generic [ref=e202]:
                  - button [ref=e203]
                  - button [ref=e204]
              - generic [ref=e205]:
                - heading [level=3] [ref=e206]
                - generic [ref=e207]:
                  - definition [ref=e208]
                  - generic [ref=e209]:
                    - term [ref=e210]
                    - term [ref=e211]
                - definition [ref=e212]
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]: COMING SOON
            - button [ref=e218] [cursor=pointer]: See All
          - list [ref=e221]:
            - listitem [ref=e222] [cursor=pointer]:
              - generic [ref=e223]:
                - img [ref=e225]
                - button [ref=e228]: Watch Trailer
              - generic [ref=e229]:
                - heading [level=3] [ref=e230]: MAIN ACTOR NAHIN HOON
                - definition [ref=e232]: 2h 4m
                - definition [ref=e234]: Hindi
    - generic [ref=e237]:
      - generic [ref=e238]:
        - link [ref=e239] [cursor=pointer]:
          - /url: /
          - img [ref=e240]
        - generic [ref=e241]: Ireo Grand View Towers 14th Floor, Golf Course Extension Road, Sector 58, Gurugram
      - generic [ref=e243]:
        - link [ref=e244] [cursor=pointer]:
          - /url: /about-us
          - text: About Us
        - link [ref=e245] [cursor=pointer]:
          - /url: https://api.cinepolisindia.com/uploads/documents/CSR%20Policy.pdf
          - text: CSR Policy
        - link [ref=e246] [cursor=pointer]:
          - /url: /tnc
          - text: Terms of Service
        - link [ref=e247] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link [ref=e248] [cursor=pointer]:
          - /url: /faq
          - text: FAQ
        - link [ref=e249] [cursor=pointer]:
          - /url: /privacy
          - text: Privacy Policy
        - link [ref=e250] [cursor=pointer]:
          - /url: /feedback
          - text: Feedback
      - generic [ref=e251]:
        - generic [ref=e252]:
          - link [ref=e253] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.ia.cinepolis.india&hl=en_IN&gl=US&pli=1
            - img [ref=e254]
          - link [ref=e255] [cursor=pointer]:
            - /url: https://apps.apple.com/in/app/cin%C3%A9polis-india/id491330571
            - img [ref=e256]
        - generic [ref=e257]:
          - link [ref=e258] [cursor=pointer]:
            - /url: https://www.facebook.com/CinepolisIndia
            - img [ref=e259]
          - link [ref=e261] [cursor=pointer]:
            - /url: https://twitter.com/i/flow/login?redirect_after_login=%2FIndiaCinepolis
            - img [ref=e262]
          - link [ref=e264] [cursor=pointer]:
            - /url: https://www.instagram.com/cinepolisindia/
            - img [ref=e265]
  - alert [ref=e269]
  - generic:
    - generic:
      - generic:
        - dialog:
          - generic [ref=e274]:
            - heading "CHOOSE A CITY" [level=2] [ref=e276]
            - generic [ref=e277]:
              - img "cityimage" [ref=e279]
              - generic [ref=e282]:
                - generic:
                  - img
                - searchbox "Search a City" [active] [ref=e283]
              - generic [ref=e285]:
                - button "Ahmedabad" [ref=e286] [cursor=pointer]
                - button "Ambala" [ref=e287] [cursor=pointer]
                - button "Amritsar" [ref=e288] [cursor=pointer]
                - button "Bengaluru" [ref=e289] [cursor=pointer]
                - button "Bhatinda" [ref=e290] [cursor=pointer]
                - button "Bhopal" [ref=e291] [cursor=pointer]
                - button "Bhubaneswar" [ref=e292] [cursor=pointer]
                - button "Chandigarh" [ref=e293] [cursor=pointer]
                - button "Chennai" [ref=e294] [cursor=pointer]
                - button "Coimbatore" [ref=e295] [cursor=pointer]
                - button "Delhi" [ref=e296] [cursor=pointer]
                - button "Faridabad" [ref=e297] [cursor=pointer]
                - button "Greater Noida" [ref=e298] [cursor=pointer]
                - button "Gurugram" [ref=e299] [cursor=pointer]
                - button "Guwahati" [ref=e300] [cursor=pointer]
                - button "Gwalior" [ref=e301] [cursor=pointer]
                - button "Hubli" [ref=e302] [cursor=pointer]
                - button "Hyderabad" [ref=e303] [cursor=pointer]
                - button "Jaipur" [ref=e304] [cursor=pointer]
                - button "Kannur" [ref=e305] [cursor=pointer]
                - button "Kochi" [ref=e306] [cursor=pointer]
                - button "Kolkata" [ref=e307] [cursor=pointer]
                - button "Kota" [ref=e308] [cursor=pointer]
                - button "Kozhikode" [ref=e309] [cursor=pointer]
                - button "Lucknow" [ref=e310] [cursor=pointer]
                - button "Ludhiana" [ref=e311] [cursor=pointer]
                - button "Mangalore" [ref=e312] [cursor=pointer]
                - button "Mohali" [ref=e313] [cursor=pointer]
                - button "Mumbai" [ref=e314] [cursor=pointer]
                - button "Muzaffarpur" [ref=e315] [cursor=pointer]
                - button "Nagpur" [ref=e316] [cursor=pointer]
                - button "Navi Mumbai" [ref=e317] [cursor=pointer]
                - button "Noida" [ref=e318] [cursor=pointer]
                - button "Panipat" [ref=e319] [cursor=pointer]
                - button "Patna" [ref=e320] [cursor=pointer]
                - button "Pune" [ref=e321] [cursor=pointer]
                - button "Rajkot" [ref=e322] [cursor=pointer]
                - button "Surat" [ref=e323] [cursor=pointer]
                - button "Thane" [ref=e324] [cursor=pointer]
                - button "Trivandrum" [ref=e325] [cursor=pointer]
                - button "Vadodara" [ref=e326] [cursor=pointer]
                - button "Vijayawada" [ref=e327] [cursor=pointer]
                - button "Visakhapatnam" [ref=e328] [cursor=pointer]
              - separator [ref=e329]
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
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
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