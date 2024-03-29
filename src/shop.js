/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

const SPECIAL_QUALITY_ITEMS = ['Sulfuras, Hand of Ragnaros', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'];
const EPIC_ITEMS = ['Sulfuras, Hand of Ragnaros'];

module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
    this._MIN_QUALITY = 0;
    this._MAX_QUALITY = 50;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.quality <= this._MAX_QUALITY && item.quality >= this._MIN_QUALITY) {
        const isEpicItem = EPIC_ITEMS.includes(item.name);
        const isSpecialQualityItem = SPECIAL_QUALITY_ITEMS.includes(item.name);

        if (!isEpicItem) {
          item.sellIn -= 1;
        }

        // this is a new if condition
        if (!isSpecialQualityItem) {
          this._decreaseItemQuality(item);
        } else if (isSpecialQualityItem && !isEpicItem) {
          this._increaseItemQuality(item);
        }
      }
    });

    return this.items;
  }

  _increaseItemQuality(item) {
    if (item.name === 'Aged Brie') {
      this._updateAgedBrieQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this._updateBackstagePassesQuality(item);
    }
  }

  _decreaseItemQuality(item) {
    if (item.quality === 0) return;
    if (this._isConjuredItem(item)) {
      this._decreaseConjuredItemQuality(item);
    } else {
      this._decreaseNormalItemQuality(item);
    }
  }

  _updateAgedBrieQuality(item) {
    if (item.quality === 50) return;
    if (item.sellIn < 0) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }
  }

  _updateBackstagePassesQuality(item) {
    if (item.sellIn < 0) item.quality = 0;
    else if (item.sellIn < 5) item.quality += 3;
    else if (item.sellIn < 10) item.quality += 2;
    else item.quality += 1;
    if (item.quality > this._MAX_QUALITY) item.quality = this._MAX_QUALITY;
  }

  _isConjuredItem(item) {
    return item.name.includes('Conjured');
  }

  _decreaseConjuredItemQuality(item) {
    if (item.sellIn >= 0) {
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
    if (item.quality < 0) item.quality = 0;
  }

  _decreaseNormalItemQuality(item) {
    if (item.sellIn >= 0) {
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
  }
};
