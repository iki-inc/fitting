export default class Fitting {
    static cover(base: {
        width: number;
        height: number;
    }, target: {
        width: number;
        height: number;
    }, ops?: {
        scale?: number;
        scaleX?: number;
        scaleY?: number;
    }): {
        cw: number;
        ch: number;
        cx: number;
        cy: number;
    };
}
