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
    if (!this.isAgedBrie() && !this.isBackstagePass()) {
      if (this.quality > 0) {
        if (!this.isSulfuras()) {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.isBackstagePass()) {
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
    if (!this.isSulfuras()) {
      this.sellIn = this.sellIn - 1
    }
    if (this.sellIn < 0) {
      if (!this.isAgedBrie()) {
        if (!this.isBackstagePass()) {
          if (this.quality > 0) {
            if (!this.isSulfuras()) {
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

  isSulfuras() {
    return this.name === 'Sulfuras, Hand of Ragnaros'
  }

  isBackstagePass() {
    return this.name === 'Backstage passes to a TAFKAL80ETC concert'
  }

  isAgedBrie() {
    return this.name === 'Aged Brie'
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }
}
