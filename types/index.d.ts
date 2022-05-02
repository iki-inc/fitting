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
    contain: (base: {
        width: number;
        height: number;
    }, target: {
        width: number;
        height: number;
    }, position?: "top left" | "top center" | "top right" | "middle left" | "center" | "middle right" | "bottom left" | "bottom center" | "bottom right", scale?: number) => {
        width: number;
        height: number;
        x: number;
        y: number;
    };
};
export default Fitting;
