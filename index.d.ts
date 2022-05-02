export default class Fitting {
    /**
     * Element fitting as cover
     * @param base - base size
     * @param target - change size
     * @param options - If present at the same time of `scale`, `scaleX` and `scaleY` is `scaleX` or `scaleY` > `scale
     */
    static cover(base: {
        width: number;
        height: number;
    }, target: {
        width: number;
        height: number;
    }, options?: {
        scale?: number;
        scaleX?: number;
        scaleY?: number;
    }): {
        width: number;
        height: number;
        x: number;
        y: number;
    };
}
