declare const Fitting: {
    cover: (base: {
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
};
export default Fitting;
