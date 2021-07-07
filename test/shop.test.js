const Shop = require("../src/shop");
const Item = require("../src/item");

describe("Shop", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decrease quality by 1", function() {
    let cheese = new Item("Cheese", 2, 2)
    let gildedRose = new Shop([ cheese ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });
  
});
