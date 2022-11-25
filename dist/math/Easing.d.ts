export declare type EasingFunction = (t: number) => number;
export declare module Easing {
    /**
     * Linear
     */
    function linear(t: number): number;
    /**
     * Quad
     */
    function easeInQuad(t: number): number;
    function easeOutQuad(t: number): number;
    function easeInOutQuad(t: number): number;
    /**
     * Cubic
     */
    function easeInCubic(t: number): number;
    function easeOutCubic(t: number): number;
    function easeInOutCubic(t: number): number;
    /**
     * Quart
     */
    function easeInQuart(t: number): number;
    function easeOutQuart(t: number): number;
    function easeInOutQuart(t: number): number;
    /**
     * Quint
     */
    function easeInQuint(t: number): number;
    function easeOutQuint(t: number): number;
    function easeInOutQuint(t: number): number;
    /**
     * Sine
     */
    function easeInSine(t: number): number;
    function easeOutSine(t: number): number;
    function easeInOutSine(t: number): number;
    /**
     * Expo
     */
    function easeInExpo(t: number): number;
    function easeOutExpo(t: number): number;
    function easeInOutExpo(t: number): number;
    /**
     * Circ
     */
    function easeInCirc(t: number): number;
    function easeOutCirc(t: number): number;
    function easeInOutCirc(t: number): number;
    /**
     * Elastic
     */
    function createEaseInElastic(s?: number): EasingFunction;
    function createEaseOutElastic(s?: number): EasingFunction;
    function createEaseInOutElastic(s?: number): EasingFunction;
    function easeInElastic(t: number): number;
    function easeOutElastic(t: number): number;
    function easeInOutElastic(t: number): number;
    const defaultEaseInElastic: EasingFunction;
    const defaultEaseOutElastic: EasingFunction;
    const defaultEaseInOutElastic: EasingFunction;
    /**
     * Back
     */
    function createEaseInBack(s?: number): EasingFunction;
    function createEaseOutBack(s?: number): EasingFunction;
    function createEaseInOutBack(s?: number): EasingFunction;
    function easeInBack(t: number): number;
    function easeOutBack(t: number): number;
    function easeInOutBack(t: number): number;
    const defaultEaseInBack: EasingFunction;
    const defaultEaseOutBack: EasingFunction;
    const defaultEaseInOutBack: EasingFunction;
    /**
     * Bounce
     */
    function easeInBounce(t: number): number;
    function easeOutBounce(t: number): number;
    function easeInOutBounce(t: number): number;
}
