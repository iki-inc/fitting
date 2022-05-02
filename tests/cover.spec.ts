import Fitting from '../lib'

test('cover: default', () => {
  expect(
    Fitting.cover({ width: 800, height: 400 }, { width: 1000, height: 200 })
  ).toMatchObject({
    width: 2000,
    height: 400,
    x: -600,
    y: -0
  })
})

test('cover: scale', () => {
  expect(
    Fitting.cover(
      { width: 800, height: 400 },
      { width: 1000, height: 200 },
      { scale: 0.5 }
    )
  ).toMatchObject({
    width: 1000,
    height: 200,
    x: -100,
    y: 100
  })
})

test('cover: scaleX', () => {
  expect(
    Fitting.cover(
      { width: 800, height: 400 },
      { width: 1000, height: 200 },
      { scaleX: 0.5 }
    )
  ).toMatchObject({
    width: 1000,
    height: 400,
    x: -100,
    y: -0
  })
})

test('cover: scaleY', () => {
  expect(
    Fitting.cover(
      { width: 800, height: 400 },
      { width: 1000, height: 200 },
      { scaleY: 0.5 }
    )
  ).toMatchObject({
    width: 2000,
    height: 200,
    x: -600,
    y: 100
  })
})

test('cover: write by scaleX and scale', () => {
  expect(
    Fitting.cover(
      { width: 800, height: 400 },
      { width: 1000, height: 200 },
      { scale: 1, scaleX: 0.5 }
    )
  ).toMatchObject({
    width: 1000,
    height: 400,
    x: -100,
    y: -0
  })
})

test('cover: write by scaleY and scale', () => {
  expect(
    Fitting.cover(
      { width: 800, height: 400 },
      { width: 1000, height: 200 },
      { scale: 1, scaleY: 0.5 }
    )
  ).toMatchObject({
    width: 2000,
    height: 200,
    x: -600,
    y: 100
  })
})
