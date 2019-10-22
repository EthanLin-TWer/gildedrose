import fs from 'fs'

import { GildedRose } from './gilded-rose'
import { Item } from './items'
import { AgedBrie } from './items/AgedBrie'
import { BackstagePass } from './items/BackstagePass'
import { Sulfuras } from './items/Sulfuras'

describe('GildedRoseTest', () => {
  it('foo', () => {
    const items = [new Item('foo', 1, 5)]

    const app = new GildedRose(items)
    app.updateQuality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sellIn).toEqual(0)
  })

  it('maximum quality is 50 and should not be further added with time passing given aged brie is expired', () => {
    const agedBrie = new AgedBrie(0, 50)

    agedBrie.passOneDay()

    expect(agedBrie.toString()).toEqual('Aged Brie, -1, 50')
  })

  it('should add 1 quality when one day passed given aged brie is expired', () => {
    const agedBrie = new AgedBrie(0, 30)

    agedBrie.passOneDay()

    expect(agedBrie.toString()).toEqual('Aged Brie, -1, 32')
  })

  it('the least quality value for normal items are 0 even if the product is expired', () => {
    const item = new Item('Elixir of the Mongoose', 0, 0)

    item.passOneDay()

    expect(item.toString()).toEqual('Elixir of the Mongoose, -1, 0')
  })

  it('should quality value decrease double times for normal items', () => {
    const item = new Item('Elixir of the Mongoose', 0, 3)

    item.passOneDay()

    expect(item.toString()).toEqual('Elixir of the Mongoose, -1, 1')
  })
})

it('safety net test', () => {
  const items = [
    new Item('+5 Dexterity Vest', 10, 20), //
    new AgedBrie(2, 0), //
    new Item('Elixir of the Mongoose', 5, 7), //
    new Sulfuras(0, 80), //
    new Sulfuras(-1, 80), //
    new BackstagePass(15, 20),
    new BackstagePass(10, 49),
    new BackstagePass(5, 49),
    new BackstagePass(1, 20),
    // this conjured item does not work properly yet
    new Item('Conjured Mana Cake', 3, 6),
  ]

  const app = new GildedRose(items)
  const days = 3
  const result = []

  result.push('OMGHAI')
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < days; i++) {
    result.push(`-------- day ${i} --------`)
    result.push('name, sellIn, quality')
    for (const item of items) {
      result.push(item.toString())
    }
    result.push('')
    app.updateQuality()
  }

  const expected = fs.readFileSync(`${__dirname}/fixture.txt`, 'utf-8')
  expect(result.join('\n')).toEqual(expected)
})
