const Shop = require('../src/shop');
const Item = require('../src/item');

describe('Shop', () => {
  it('creates an item called "foo"', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should decrease quality by 1', () => {
    const cheeseDouble = { sellIn: 30, quality: 10 };
    const gildedRose = new Shop([cheeseDouble]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it('should decrease sell in by 1', () => {
    const cheeseDouble = { sellIn: 30, quality: 10 };
    const gildedRose = new Shop([cheeseDouble]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(29);
  });
});
