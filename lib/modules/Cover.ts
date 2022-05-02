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

  const cx = (cw - base.width) / 2
  const cy = (ch - base.height) / 2

  return {
    width: cw,
    height: ch,
    x: cx === 0 ? cx : -cx,
    y: cy === 0 ? cy : -cy
  }
}
