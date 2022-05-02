declare type TPosition = 'top left' | 'top center' | 'top right' | 'middle left' | 'center' | 'middle right' | 'bottom left' | 'bottom center' | 'bottom right';
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
 * @param scale
 */
export declare const contain: (base: {
    width: number;
    height: number;
}, target: {
    width: number;
    height: number;
}, position?: TPosition, scale?: number) => {
    width: number;
    height: number;
    x: number;
    y: number;
};
export {};
