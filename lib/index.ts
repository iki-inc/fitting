export default class Fitting {
  /**
   * Element fitting as cover
   * @param base - base size
   * @param target - change size
   * @param ops
   */
  static cover(
    base: {
      width: number
      height: number
    },
    target: {
      width: number
      height: number
    },
    ops?: {
      scale?: number
      scaleX?: number
      scaleY?: number
    }
  ): { cw: number; ch: number; cx: number; cy: number } {
    const ratio = Math.max(
      base.width / target.width,
      base.height / target.height
    )

    const scaleX = ops?.scaleX ?? ops?.scale ?? 1
    const scaleY = ops?.scaleY ?? ops?.scale ?? 1

    const cw = target.width * scaleX * ratio
    const ch = target.height * scaleY * ratio

    return {
      cw,
      ch,
      cx: -((cw - base.width) / 2),
      cy: -((ch - base.height) / 2)
    }
  }
}
