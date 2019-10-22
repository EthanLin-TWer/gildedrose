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
