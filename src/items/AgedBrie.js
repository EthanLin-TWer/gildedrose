import { Item } from './index'

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  updateQualityAfterExpiration() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isAgedBrie() {
    return true
  }
}
