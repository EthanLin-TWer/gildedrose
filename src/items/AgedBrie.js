import { Item } from './index'

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  // eslint-disable-next-line class-methods-use-this
  isAgedBrie() {
    return true
  }
}
