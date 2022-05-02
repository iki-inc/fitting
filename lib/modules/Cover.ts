/**
 * Element fitting as cover
 * @param base - base size
 * @param target - change size
 * @param options - If present at the same time of `scale`, `scaleX` and `scaleY` is `scaleX` or `scaleY` > `scale
 */
export const cover = (
  base: {
    width: number
    height: number
  },
  target: {
    width: number
    height: number
  },
  options?: {
    scale?: number
    scaleX?: number
    scaleY?: number
  }
): { width: number; height: number; x: number; y: number } => {
  const ratio = Math.max(base.width / target.width, base.height / target.height)

  const scaleX = options?.scaleX ?? options?.scale ?? 1
  const scaleY = options?.scaleY ?? options?.scale ?? 1

  const cw = target.width * scaleX * ratio
  const ch = target.height * scaleY * ratio

  return {
    width: cw,
    height: ch,
    x: -((cw - base.width) / 2),
    y: -((ch - base.height) / 2)
  }
}
