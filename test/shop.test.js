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

  describe('minimum quality', () => {
    it('quality can\'t go below 0', () => {
      cheeseDouble = { name: 'cheese', sellIn: 0, quality: 0 };
      gildedRose = new Shop([cheeseDouble]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Aged Brie', ()=> {
    let brieDouble;

    describe('when it gets older', ()=> {
      it('increases quality by 1', () => {
        brieDouble = { name: 'Aged Brie', quality: 10 };
        gildedRose = new Shop([brieDouble]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(11);
      });
    });

    describe('when it is past sellIn date', ()=> {
      it('increases quality by 2', () => {
        brieDouble = { name: 'Aged Brie', sellIn: 0, quality: 40 };
        gildedRose = new Shop([brieDouble]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(42);
      });
    });

    it('quality can\'t go above 50 for regular items', () => {
      brieDouble = { name: 'Aged Brie', quality: 49 };
      gildedRose = new Shop([brieDouble]);
      items = gildedRose.updateQuality();
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Backstage passes', ()=> {
    let backstagePasses;

    it('quality can\'t go above 50 for regular items', () => {
      backstagePasses = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 48 };
      gildedRose = new Shop([backstagePasses]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });
});
