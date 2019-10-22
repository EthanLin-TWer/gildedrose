export class GildedRose {
  items

  constructor(items) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateItem()
    }
  }
}
