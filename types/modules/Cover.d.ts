/**
 * Element fitting as cover
 * @param base - base size
 * @param target - change size
 * @param options - If present at the same time of `scale`, `scaleX` and `scaleY` is `scaleX` or `scaleY` > `scale
 */
export declare const cover: (base: {
    width: number;
    height: number;
}, target: {
    width: number;
    height: number;
}, options?: {
    scale?: number | undefined;
    scaleX?: number | undefined;
    scaleY?: number | undefined;
} | undefined) => {
    width: number;
    height: number;
    x: number;
    y: number;
};
