/* eslint-disable no-underscore-dangle */
module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (!this._isSpecialItem(item)) {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            this._decreaseQuality(item);
          }
        }
      } else if (this._isLessThanFifty(item)) {
        this._increaseQuality(item);
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (this._isLessThanFifty(item)) {
              this._increaseQuality(item);
            }
          }
          if (item.sellIn < 6) {
            if (this._isLessThanFifty(item)) {
              this._increaseQuality(item);
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this._decreaseSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                this._decreaseQuality(item);
              }
            }
          } else {
            item.quality -= item.quality;
          }
        } else if (this._isLessThanFifty(item)) {
          this._increaseQuality(item);
        }
      }
    });
    return this.items;
  }

  _decreaseQuality(item) {
    item.quality -= 1;
  }

  _increaseQuality(item) {
    item.quality += 1;
  }

  _decreaseSellIn(item) {
    item.sellIn -= 1;
  }

  _increaseSellIn(item) {
    item.sellIn += 1;
  }

  _isSpecialItem(item) {
    const isSpecial = item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert';
    return isSpecial;
  }

  _isLessThanFifty(item) {
    return item.quality < 50;
  }
};
