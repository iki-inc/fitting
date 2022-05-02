type TPosition =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'middle left'
  | 'center'
  | 'middle right'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'

const cx = (base: number, cw: number, position: TPosition): number => {
  switch (position) {
    case 'top center':
    case 'center':
    case 'bottom center':
      return (base - cw) / 2
    case 'top right':
    case 'middle right':
    case 'bottom right':
      return base - cw
    default:
      return 0
  }
}

const cy = (base: number, ch: number, position: TPosition): number => {
  switch (position) {
    case 'middle left':
    case 'center':
    case 'middle right':
      return (base - ch) / 2
    case 'bottom left':
    case 'bottom center':
    case 'bottom right':
      return base - ch
    default:
      return 0
  }
}

/**
 * Element fitting as contain
 *
 * Position:<br>
 * top left    | top center    | top right<br>
 * middle left | center        | middle right<br>
 * bottom left | bottom center | bottom right<br>
 *
 * @param base - base size
 * @param target - change size
 * @param position
 */
export const contain = (
  base: {
    width: number
    height: number
  },
  target: {
    width: number
    height: number
  },
  position: TPosition = 'top left'
): {
  width: number
  height: number
  x: number
  y: number
} => {
  const ratio = Math.min(base.width / target.width, base.height / target.height)

  const cw = target.width * ratio
  const ch = target.height * ratio

  return {
    width: cw,
    height: ch,
    x: cx(base.width, cw, position),
    y: cy(base.height, ch, position)
  }
}
