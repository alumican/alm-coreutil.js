export declare module Type {
    /**
     * 引数がbooleanかどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合はboolean
     */
    function isBoolean(value: any): boolean;
    /**
     * 引数が数値かどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合は数値
     */
    function isNumber(value: any): boolean;
    /**
     * 引数が文字列値かどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合は文字列
     */
    function isString(value: any): boolean;
    /**
     * 引数がfunctionかどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合はfunction
     */
    function isFunction(value: any): boolean;
    /**
     * 引数がオブジェクトかどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合はobject
     */
    function isObject(value: any): boolean;
    /**
     * 引数が配列かどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合は配列
     */
    function isArray(value: any): boolean;
    /**
     * 引数が空（null or undefined）かどうかを判断する
     * @param {number} value 入力値
     * @returns {boolean} trueの場合は空
     */
    function isNull(value: any): boolean;
}
