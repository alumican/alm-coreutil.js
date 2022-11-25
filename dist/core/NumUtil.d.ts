import { EasingFunction } from "../math/Easing";
export declare module NumUtil {
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
    function map(value: number, srcA: number, srcB: number, dstA: number, dstB: number, clamp?: boolean): number;
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
    function ease(value: number, srcA: number, srcB: number, dstA: number, dstB: number, easing: EasingFunction): number;
    /**
     * 値を特定範囲内に丸める
     * @param {number} value 入力値
     * @param {number} min 最小値
     * @param {number} max 最大値
     * @returns {number} 出力値
     */
    function clamp(value: number, min: number, max: number): number;
    /**
     * 符号を保ったまま、値の絶対値を特定範囲内に丸める
     * @param {number} value 入力値
     * @param {number} minAbs 最小値
     * @param {number} maxAbs 最大値
     * @returns {number} 出力値
     */
    function clampAbs(value: number, minAbs: number, maxAbs: number): number;
    /**
     * 2点間を線形補間する
     * @param {number} t 補間値
     * @param {number} a 開始値
     * @param {number} b 終了値
     * @param {boolean} clamp trueの場合は補間値を[a, b]の範囲内に丸める
     * @returns {number} 出力値 (t=0のときa, t=1のときb)
     */
    function lerp(t: number, a: number, b: number, clamp?: boolean): number;
    /**
     * 乱数（小数）を取得する
     * @param {number} min 最小値
     * @param {number} max 最大値
     * @returns {number} 出力値
     */
    function random(min?: number, max?: number): number;
    /**
     * 乱数（整数）を取得する
     * @param {number} min 最小値
     * @param {number} max 最大値
     * @returns {number} 出力値
     */
    function randomInt(min?: number, max?: number): number;
    /**
     * 正負方向の同じ範囲で乱数を取得する
     * @param {number} min 最小値（正の数）
     * @param {number} max 最大値（正の数）
     * @returns {number} 出力値
     */
    function randomAbs(min?: number, max?: number): number;
    /**
     * +1もしくは-1を返す
     * @returns {number} 出力値
     */
    function randomSign(): number;
    /**
     * 2点間の距離を取得する
     * @param {number} x1 点1のx座標
     * @param {number} y1 点1のy座標
     * @param {number} x2 点2のx座標
     * @param {number} y2 点2のy座標
     * @param {boolean} squared trueの場合は2乗の値を取得する
     * @returns {number} 距離
     */
    function dist(x1: number, y1: number, x2: number, y2: number, squared?: boolean): number;
    /**
     * 値をラジアン法から弧度法に変換する
     * @param {number} radian ラジアン法
     * @returns {number} 弧度法
     */
    function radToDeg(radian: number): number;
    /**
     * 値を弧度法からラジアン法に変換する
     * @param {number} radian 弧度法
     * @returns {number} ラジアン法
     */
    function degToRad(degree: number): number;
    /**
     * ある角度からある角度への回転角度を取得する
     * @param {number} from 元の角度
     * @param {number} to 目標の角度
     * @param {boolean} radian trueの場合はラジアン法で計算する
     * @returns {number} 回転角度
     */
    function turn(from: number, to: number, radian?: boolean): number;
    const PI: number;
    const PI2: number;
    const PI3: number;
    const PI4: number;
    const PI5: number;
    const PI6: number;
    const PI_2: number;
    const PI_3: number;
    const PI_4: number;
    const PI_6: number;
}
