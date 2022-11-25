export type EasingFunction = (t:number) => number;

export module Easing {

	/**
	 * Linear
	 */
	export function linear(t:number):number {
		return t;
	}

	/**
	 * Quad
	 */
	export function easeInQuad(t:number):number {
		return (t /= 1) * t;
	}

	export function easeOutQuad(t:number):number {
		return -(t /= 1) * (t - 2);
	}

	export function easeInOutQuad(t:number):number {
		if ((t /= 0.5) < 1) return 0.5 * t * t;
		return -0.5 * ((--t) * (t - 2) - 1);
	}

	/**
	 * Cubic
	 */
	export function easeInCubic(t:number):number {
		return (t /= 1) * t * t;
	}

	export function easeOutCubic(t:number):number {
		return (t = t - 1) * t * t + 1;
	}

	export function easeInOutCubic(t:number):number {
		if ((t /= 0.5) < 1) return 0.5 * t * t * t;
		return 0.5 * ((t -= 2) * t * t + 2);
	}

	/**
	 * Quart
	 */
	export function easeInQuart(t:number):number {
		return (t /= 1) * t * t * t;
	}

	export function easeOutQuart(t:number):number {
		return -((t = t - 1) * t * t * t - 1);
	}

	export function easeInOutQuart(t:number):number {
		if ((t /= 0.5) < 1) return 0.5 * t * t * t * t;
		return -0.5 * ((t -= 2) * t * t * t - 2);
	}

	/**
	 * Quint
	 */
	export function easeInQuint(t:number):number {
		return (t /= 1) * t * t * t * t;
	}

	export function easeOutQuint(t:number):number {
		return ((t = t - 1) * t * t * t * t + 1);
	}

	export function easeInOutQuint(t:number):number {
		if ((t /= 0.5) < 1) return 0.5 * t * t * t * t * t;
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	}

	/**
	 * Sine
	 */
	export function easeInSine(t:number):number {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	}

	export function easeOutSine(t:number):number {
		return Math.sin(t * (Math.PI / 2));
	}

	export function easeInOutSine(t:number):number {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	}

	/**
	 * Expo
	 */
	export function easeInExpo(t:number):number {
		if (t === 0) return 0;
		return Math.pow(2, 10 * (t - 1));
	}

	export function easeOutExpo(t:number):number {
		if (t === 1) return 1;
		return -Math.pow(2, -10 * t) + 1;
	}

	export function easeInOutExpo(t:number):number {
		if (t === 0) return 0;
		if (t === 1) return 1;
		if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	}

	/**
	 * Circ
	 */
	export function easeInCirc(t:number):number {
		return -(Math.sqrt(1 - (t /= 1) * t) - 1);
	}

	export function easeOutCirc(t:number):number {
		return Math.sqrt(1 - (t = t - 1) * t);
	}

	export function easeInOutCirc(t:number):number {
		if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	}

	/**
	 * Elastic
	 */
	export function createEaseInElastic(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			let p:number = 0;
			let a:number = 1;
			if (t === 0) return 0;
			if ((t /= 1) === 1) return 1;
			if (p === 0) p = 0.3;
			if (a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p);
		}
	}

	export function createEaseOutElastic(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			let p:number = 0;
			let a:number = 1;
			if (t === 0) return 0;
			if ((t /= 1) === 1) return 1;
			if (p === 0) p = 0.3;
			if (a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
		}
	}

	export function createEaseInOutElastic(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			let p:number = 0;
			let a:number = 1;
			if (t === 0) return 0;
			if ((t /= 0.5) === 2) return 1;
			if (p === 0) p = 0.3 * 1.5;
			if (a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			if (t < 1) return -0.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p);
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
		}
	}

	export function easeInElastic(t:number):number {
		return defaultEaseInElastic(t);
	}

	export function easeOutElastic(t:number):number {
		return defaultEaseOutElastic(t);
	}

	export function easeInOutElastic(t:number):number {
		return defaultEaseInOutElastic(t);
	}

	export const defaultEaseInElastic:EasingFunction = createEaseInElastic();
	export const defaultEaseOutElastic:EasingFunction = createEaseOutElastic();
	export const defaultEaseInOutElastic:EasingFunction = createEaseInOutElastic();

	/**
	 * Back
	 */
	export function createEaseInBack(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			return (t /= 1) * t * ((s + 1) * t - s);
		}
	}

	export function createEaseOutBack(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			return (t = t - 1) * t * ((s + 1) * t + s) + 1;
		}
	}

	export function createEaseInOutBack(s:number = 1.70158):EasingFunction {
		return function (t:number) {
			if ((t /= 0.5) < 1) return 0.5 * t * t * (((s *= 1.525) + 1) * t - s);
			return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
		}
	}

	export function easeInBack(t:number):number {
		return defaultEaseInBack(t);
	}

	export function easeOutBack(t:number):number {
		return defaultEaseOutBack(t);
	}

	export function easeInOutBack(t:number):number {
		return defaultEaseInOutBack(t);
	}

	export const defaultEaseInBack:EasingFunction = createEaseInBack();
	export const defaultEaseOutBack:EasingFunction = createEaseOutBack();
	export const defaultEaseInOutBack:EasingFunction = createEaseInOutBack();

	/**
	 * Bounce
	 */
	export function easeInBounce(t:number):number {
		return 1 - easeOutBounce(1 - t);
	}

	export function easeOutBounce(t:number):number {
		if ((t /= 1) < (1 / 2.75)) {
			return 7.5625 * t * t;
		} else if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		} else if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		} else {
			return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
		}
	}

	export function easeInOutBounce(t:number):number {
		if (t < 0.5) return easeInBounce(t * 2) * 0.5;
		return easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
}
