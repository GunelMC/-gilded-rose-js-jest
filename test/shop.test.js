const Shop = require('../src/shop');
const Item = require('../src/item');

describe('Shop', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should decrease quality by 1', () => {
    const cheese = new Item('Cheese', 2, 2);
    const gildedRose = new Shop([cheese]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });
});
