import { Item } from './index'

export class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  updateQualityAfterExpiration() {
    this.quality = 0
  }

  // eslint-disable-next-line class-methods-use-this
  isBackstagePass() {
    return true
  }
}
