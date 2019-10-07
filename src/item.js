export class Item {
  name
  sell_in
  quality

  constructor(name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }
}
