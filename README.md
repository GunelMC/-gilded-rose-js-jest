# Gilded Rose

This is the [Gilded Rose kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) in [JavaScript with Jest](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/js-jest).

## Getting started

1. Clone this repo git clone `https://github.com/GunelMC/-gilded-rose-js-jest.git`
2. Change into the directory gilded-rose-js-jest: `cd gilded-rose-js-jest`
3. Run npm to install dependencies `npm install`

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

### Notes on Approach 

I began by splitting my two classes (Item and Shop) into seperate files. After some minor adjustments to the code, I added new unit tests into Item class. I then converted TextTest Golden Master test into Jest integration to compare the overall expected and actual output before writing new tests or refactoring the legacy code. 

Following this, I started to test-drive each of the specifications outlined in the acceptance criteria and adding unit tests for my Shop class. I began by writing tests for core cases - that is regular items, and moving on to the special quality items like Sulfuras, Aged Brie and Backstage passes. Once I was satisfied that my tests covered most cases laid out in the specifications, I started refactoring the legacy code. 

While refactoring, I tried to extract logic into private helper methods with descriptive names to make the code my readable. To this end, I categorised items into 3 groups: Special Quality Items(Sulfuras, Aged Brie and Backstage passes), Epic Items(Sulfuras) and regular items. I then grouped expected behaviour logic relating to these item categories using private methods with descriptive names to render the intention and to get rid of duplication to keep the code DRY.

Finally, I have implemented the new 'Conjured Item' described in the specification.

When writing test cases for the new implementation, I used a combination of the original specification and the behaviour I could observe in the the stdout.gr file of texttests and TexttestFixture.

Test Coverage: > 97%

