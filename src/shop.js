/* eslint-disable no-underscore-dangle */
module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this._isSpecialItem(i)) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this._decreaseQuality(i);
          }
        }
      } else if (this._isLessThanFifty(i)) {
        this._increaseQuality(i);
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].sellIn < 11) {
            if (this._isLessThanFifty(i)) {
              this._increaseQuality(i);
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this._isLessThanFifty(i)) {
              this._increaseQuality(i);
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this._decreaseSellIn(i);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this._decreaseQuality(i);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else if (this._isLessThanFifty(i)) {
          this._increaseQuality(i);
        }
      }
    }

    return this.items;
  }

  _decreaseQuality(index) {
    this.items[index].quality -= 1;
  }

  _increaseQuality(index) {
    this.items[index].quality += 1;
  }

  _decreaseSellIn(index) {
    this.items[index].sellIn -= 1;
  }

  _increaseSellIn(index) {
    this.items[index].sellIn += 1;
  }

  _isSpecialItem(index) {
    const isSpecial = this.items[index].name === 'Aged Brie' || this.items[index].name === 'Backstage passes to a TAFKAL80ETC concert';
    return isSpecial;
  }

  _isLessThanFifty(index) {
    return this.items[index].quality < 50;
  }
};
