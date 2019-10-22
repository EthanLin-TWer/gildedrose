import { Item } from './index'

export class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  // eslint-disable-next-line class-methods-use-this
  isSulfuras() {
    return true
  }
}
