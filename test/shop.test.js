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

  describe('Aged Brie', () => {
    let brieDouble;

    describe('when it gets older', () => {
      it('increases quality by 1', () => {
        brieDouble = { name: 'Aged Brie', quality: 10 };
        gildedRose = new Shop([brieDouble]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(11);
      });
    });

    describe('when it is past sellIn date', () => {
      it('increases quality by 2', () => {
        brieDouble = { name: 'Aged Brie', sellIn: 0, quality: 40 };
        gildedRose = new Shop([brieDouble]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(42);
      });
    });

    it('quality can\'t go above 50', () => {
      brieDouble = { name: 'Aged Brie', quality: 49 };
      gildedRose = new Shop([brieDouble]);
      items = gildedRose.updateQuality();
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Backstage passes', () => {
    let backstagePasses;

    describe('when its sellIn is over 10 days left', () => {
      it('increases quality by 1', () => {
        backstagePasses = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 30 };
        gildedRose = new Shop([backstagePasses]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(31);
      });
    });

    describe('when its sellIn is between 10 and 5 days', () => {
      it('increases quality by 2', () => {
        backstagePasses = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 8, quality: 30 };
        gildedRose = new Shop([backstagePasses]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(32);
      });
    });

    describe('when its sellIn is less than 5 days', () => {
      it('increases quality by 3', () => {
        backstagePasses = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 30 };
        gildedRose = new Shop([backstagePasses]);
        items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(33);
      });
    });

    it('quality can\'t go above 50', () => {
      backstagePasses = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 48 };
      gildedRose = new Shop([backstagePasses]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    let sulfurasDouble;

    beforeEach(() => {
      sulfurasDouble = { name: 'Sulfuras, Hand of Ragnaros', sellIn: 60, quality: 80 };
      gildedRose = new Shop([sulfurasDouble]);
      items = gildedRose.updateQuality();
    });

    it('its quality does not change', () => {
      expect(items[0].quality).toBe(80);
    });

    it('its sellIn does not change', () => {
      expect(items[0].sellIn).toBe(60);
    });
  });

  describe('Conjured Items', () => {
    let conjuredItemDouble;
    it('decreases quality by 2 past sellIn date', () => {
      conjuredItemDouble = { name: 'Conjured Elixir of the Mongoose', sellIn: -1, quality: 7 }
      gildedRose = new Shop([conjuredItemDouble]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(5);
    });

    it('decreases quality by 1 before sellIn date', () => {
      conjuredItemDouble = { name: 'Conjured Elixir of the Mongoose', sellIn: 2, quality: 5 }
      gildedRose = new Shop([conjuredItemDouble]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(4);
    });

    it('quality can\'t go below 0', () => {
      conjuredItemDouble = { name: 'Conjured Elixir of the Mongoose', sellIn: -1, quality: 0 }
      gildedRose = new Shop([conjuredItemDouble]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
