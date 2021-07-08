module.exports = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(i);
          }
        }
      } else if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
        if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.increaseQuality(i);
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.increaseQuality(i);
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.decreaseSellIn(i);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.decreaseQuality(i);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else if (this.items[i].quality < 50) {
          this.increaseQuality(i);
        }
      }
    }

    return this.items;
  }

  decreaseQuality(index) {
    this.items[index].quality -= 1;
  }

  increaseQuality(index) {
    this.items[index].quality += 1;
  }

  decreaseSellIn(index) {
    this.items[index].sellIn -= 1;
  }
  increaseSellIn(index) {
    this.items[index].sellIn += 1;
  }
};
