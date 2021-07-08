const Shop = require('../src/shop');

describe('Shop', () => {
  let cheeseDouble;
  let gildedRose;
  let items;

  describe('Regular items', () => {
    beforeEach(() => {
      cheeseDouble = { name: 'cheese', sellIn: 30, quality: 10 };
      gildedRose = new Shop([cheeseDouble]);
      items = gildedRose.updateQuality();
    });

    it('creates an item called "cheese"', () => {
      expect(items[0].name).toBe('cheese');
    });

    it('should decrease quality by 1', () => {
      expect(items[0].quality).toEqual(9);
    });

    it('should decrease sell in by 1', () => {
      expect(items[0].sellIn).toBe(29);
    });
  });

  describe('quality range', ()=> {
    beforeEach(() => {
      cheeseDouble = { name: 'cheese', sellIn: 0, quality: 0 };
      gildedRose = new Shop([cheeseDouble]);
    });

    it('quality can\'t go below 0', () => {
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
