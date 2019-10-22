export class Item {
  name
  sellIn
  quality

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateItem() {
    if (
      this.name !== 'Aged Brie' &&
      this.name !== 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      if (this.quality > 0) {
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
        }
      }
    }
    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1
    }
    if (this.sellIn < 0) {
      if (this.name !== 'Aged Brie') {
        if (this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name !== 'Sulfuras, Hand of Ragnaros') {
              this.quality = this.quality - 1
            }
          }
        } else {
          this.quality = 0
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }
}
