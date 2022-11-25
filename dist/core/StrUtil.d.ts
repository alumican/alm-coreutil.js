export declare module StrUtil {
    /**
     * 時間を h:mm:ss の形式で取得する
     * @param {number} hours 時
     * @param {number} minutes 分
     * @param {number} seconds 秒
     * @returns {string} h:mm:ss 形式の文字列
     */
    function toTimeString(hours?: number, minutes?: number, seconds?: number): string;
}
