import { contain } from '../lib/modules/Contain'

describe('default', () => {
  test('contain: default', () => {
    expect(
      contain({ width: 800, height: 400 }, { width: 1000, height: 200 })
    ).toMatchObject({
      width: 800,
      height: 160,
      x: 0,
      y: 0
    })
  })
})

describe('contain: top center', () => {
  test('Width is min', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'top center'
      )
    ).toMatchObject({
      width: 800,
      height: 160,
      x: 0,
      y: 0
    })
  })

  test('Height is min', () => {
    expect(
      contain(
        { width: 800, height: 900 },
        { width: 1000, height: 1500 },
        'top center'
      )
    ).toMatchObject({
      width: 600,
      height: 900,
      x: 100,
      y: 0
    })
  })
})

describe('contain: top right', () => {
  test('Width is min', () => {
    expect(
      contain(
        { width: 800, height: 900 },
        { width: 1000, height: 1500 },
        'top right'
      )
    ).toMatchObject({
      width: 600,
      height: 900,
      x: 200,
      y: 0
    })
  })
})

describe('contain: middle left', () => {
  test('Width is min', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'middle left'
      )
    ).toMatchObject({
      width: 800,
      height: 160,
      x: 0,
      y: 120
    })
  })
})

describe('contain: middle right', () => {
  test('Width is min', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'middle right'
      )
    ).toMatchObject({
      width: 800,
      height: 160,
      x: 0,
      y: 120
    })
  })
})

describe('contain: bottom left', () => {
  test('Width is min', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'bottom left'
      )
    ).toMatchObject({
      width: 800,
      height: 160,
      x: 0,
      y: 240
    })
  })
})

describe('contain: center', () => {
  test('scale down', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'center',
        0.5
      )
    ).toMatchObject({
      width: 400,
      height: 80,
      x: 200,
      y: 160
    })
  })

  test('scale up', () => {
    expect(
      contain(
        { width: 800, height: 400 },
        { width: 1000, height: 200 },
        'center',
        1.5
      )
    ).toMatchObject({
      width: 1200,
      height: 240,
      x: -200,
      y: 80
    })
  })
})
