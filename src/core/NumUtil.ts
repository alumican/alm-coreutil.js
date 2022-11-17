import {EasingFunction} from "../easing/Easing";

export namespace NumUtil {

	/**
	 * 値を特定の範囲から範囲にマッピングする
	 * @param {number} value 入力値
	 * @param {number} srcA マッピング元範囲の境界値A
	 * @param {number} srcB マッピング元範囲の境界値B
	 * @param {number} dstA マッピング元の値Aに対応するマッピング先の値
	 * @param {number} dstB マッピング元の値Bに対応するマッピング先の値
	 * @param {boolean} clamp trueの場合は入力値を[srcA, srcB]の範囲内に丸める
	 * @returns {number} 出力値
	 */

	export function map(value:number, srcA:number, srcB:number, dstA:number, dstB:number, clamp:boolean = true):number {
		if (srcA === srcB) return dstA;
		if (clamp) {
			if (srcA < srcB) {
				if (value < srcA) value = srcA;
				else if (value > srcB) value = srcB;
			} else {
				if (value < srcB) value = srcB;
				else if (value > srcA) value = srcA;
			}
		}
		return (value - srcA) * (dstB - dstA) / (srcB - srcA) + dstA;
	}

	/**
	 * 値を特定の範囲からイージング関数を経由して特定の範囲にマッピングする
	 * @param {number} value 入力値
	 * @param {number} srcA マッピング元範囲の境界値A
	 * @param {number} srcB マッピング元範囲の境界値B
	 * @param {number} dstA マッピング元の値Aに対応するマッピング先の値
	 * @param {number} dstB マッピング元の値Bに対応するマッピング先の値
	 * @param {EasingFunction} easing イージング関関数
	 * @returns {number} 出力値
	 */
	export function ease(value:number, srcA:number, srcB:number, dstA:number, dstB:number, easing:EasingFunction):number {
		if (srcA === srcB) return dstA;
		if (srcA < srcB) {
			if (value < srcA) value = srcA;
			else if (value > srcB) value = srcB;
			return easing((value - srcA) / (srcB - srcA)) * (dstB - dstA) + dstA;
		} else {
			if (value < srcB) value = srcB;
			else if (value > srcA) value = srcA;
			return easing((value - srcB) / (srcA - srcB)) * (dstB - dstA) + dstA;
		}
	}

	/**
	 * 値を特定範囲内に丸める
	 * @param {number} value 入力値
	 * @param {number} min 最小値
	 * @param {number} max 最大値
	 * @returns {number} 出力値
	 */
	export function clamp(value:number, min:number, max:number):number {
		return value < min ? min : (value > max ? max : value);
	}

	/**
	 * 符号を保ったまま、値の絶対値を特定範囲内に丸める
	 * @param {number} value 入力値
	 * @param {number} minAbs 最小値
	 * @param {number} maxAbs 最大値
	 * @returns {number} 出力値
	 */
	export function clampAbs(value:number, minAbs:number, maxAbs:number):number {
		if (value > 0) {
			return value < minAbs ? minAbs : (value > maxAbs ? maxAbs : value);
		} else {
			value = Math.abs(value);
			return -(value < minAbs ? minAbs : (value > maxAbs ? maxAbs : value));
		}
	}

	/**
	 * 2点間を線形補間する
	 * @param {number} t 補間値
	 * @param {number} a 開始値
	 * @param {number} b 終了値
	 * @param {boolean} clamp trueの場合は補間値を[a, b]の範囲内に丸める
	 * @returns {number} 出力値 (t=0のときa, t=1のときb)
	 */
	export function lerp(t:number, a:number, b:number, clamp:boolean = true):number {
		if (clamp) {
			if (t < 0) t = 0;
			else if (t > 1) t = 1;
		}
		return a * (1 - t) + b * t;
	}

	/**
	 * 乱数（小数）を取得する
	 * @param {number} min 最小値
	 * @param {number} max 最大値
	 * @returns {number} 出力値
	 */
	export function random(min:number = 0, max:number = 1):number {
		return min + (max - min) * Math.random();
	}

	/**
	 * 乱数（整数）を取得する
	 * @param {number} min 最小値
	 * @param {number} max 最大値
	 * @returns {number} 出力値
	 */
	export function randomInt(min:number = 0, max:number = 1):number {
		return Math.floor(random(min, max + 1));
	}

	/**
	 * 正負方向の同じ範囲で乱数を取得する
	 * @param {number} min 最小値（正の数）
	 * @param {number} max 最大値（正の数）
	 * @returns {number} 出力値
	 */
	export function randomAbs(min:number = 0, max:number = 1):number {
		return random(min, max) * randomSign();
	}

	/**
	 * +1もしくは-1を返す
	 * @returns {number} 出力値
	 */
	export function randomSign():number {
		return Math.random() < 0.5 ? 1 : -1;
	}

	/**
	 * 2点間の距離を取得する
	 * @param {number} x1 点1のx座標
	 * @param {number} y1 点1のy座標
	 * @param {number} x2 点2のx座標
	 * @param {number} y2 点2のy座標
	 * @param {boolean} squared trueの場合は2乗の値を取得する
	 * @returns {number} 距離
	 */
	export function dist(x1:number, y1:number, x2:number, y2:number, squared:boolean = false):number {
		const dx:number = x2 - x1;
		const dy:number = y2 - y1;
		return squared ? (dx * dx + dy * dy) : Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * 値をラジアン法から弧度法に変換する
	 * @param {number} radian ラジアン法
	 * @returns {number} 弧度法
	 */
	export function radToDeg(radian:number):number {
		return radian * RAD2DEG;
	}

	/**
	 * 値を弧度法からラジアン法に変換する
	 * @param {number} radian 弧度法
	 * @returns {number} ラジアン法
	 */
	export function degToRad(degree:number):number {
		return degree * DEG2RAD;
	}

	/**
	 * ある角度からある角度への回転角度を取得する
	 * @param {number} from 元の角度
	 * @param {number} to 目標の角度
	 * @param {boolean} radian trueの場合はラジアン法で計算する
	 * @returns {number} 回転角度
	 */
	export function turn(from:number, to:number, radian:boolean = true):number {
		return radian ? ((to - from + PI3) % PI2 - Math.PI) : ((to - from + 540) % 360 - 180);
	}


// --------------------------------------------------
//
// CONST
//
// --------------------------------------------------

	export const PI:number = Math.PI;
	export const PI2:number = Math.PI * 2;
	export const PI3:number = Math.PI * 3;
	export const PI4:number = Math.PI * 4;
	export const PI5:number = Math.PI * 5;
	export const PI6:number = Math.PI * 6;
	export const PI_2:number = Math.PI / 2;
	export const PI_3:number = Math.PI / 3;
	export const PI_4:number = Math.PI / 4;
	export const PI_6:number = Math.PI / 6;

	const RAD2DEG:number = 180 / Math.PI;
	const DEG2RAD:number = Math.PI / 180;
}
