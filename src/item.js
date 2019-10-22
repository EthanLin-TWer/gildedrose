export class Item {
  name
  sellIn
  quality

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }
}
