const fs = require('fs');
const Item = require('../src/item');
const Shop = require('../src/shop');

describe('Golden master integration test', () => {
  test('output text should match the expected text', () => {
    let actualOutput = '';
    const expectedMasterOutput = fs.readFileSync(`${__dirname}/golden_master.txt`, { encoding: 'utf8' });

    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6),
    ];

    const gildedRose = new Shop(items);
    const days = 30;

    for (let i = 0; i <= days; i += 1) {
      actualOutput += `\n-------- day ${i} --------\n`;
      actualOutput += 'name, sellIn, quality\n';

      // eslint-disable-next-line no-loop-func
      gildedRose.items.forEach((item) => {
        actualOutput += `${item.name}, ${item.sellIn}, ${item.quality}\n`;
      });

      gildedRose.updateQuality();
    }

    expect(actualOutput).toBe(expectedMasterOutput);
  });
});
