import Fitting from '../lib'

test('cover: default', () => {
  expect(
    Fitting.cover({ width: 800, height: 400 }, { width: 1000, height: 200 })
  ).toMatchObject({
    cw: 2000,
    ch: 400,
    cx: -600,
    cy: -0
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
    cw: 1000,
    ch: 200,
    cx: -100,
    cy: 100
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
    cw: 1000,
    ch: 400,
    cx: -100,
    cy: -0
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
    cw: 2000,
    ch: 200,
    cx: -600,
    cy: 100
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
    cw: 1000,
    ch: 400,
    cx: -100,
    cy: -0
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
    cw: 2000,
    ch: 200,
    cx: -600,
    cy: 100
  })
})
