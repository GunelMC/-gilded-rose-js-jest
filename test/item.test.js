const Item = require("../src/item");

describe('Item', () => {
  let item;

  beforeEach(() => {
    item = new Item('foo', 10, 10);
  });

  it('has a name', () => {
    expect(item.name).toBe('foo');
  });
});