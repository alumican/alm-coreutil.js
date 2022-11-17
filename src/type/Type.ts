export namespace Type {

	/**
	 * 引数がbooleanかどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合はboolean
	 */
	export function isBoolean(value:any):boolean {
		return typeof value === 'boolean';
	}

	/**
	 * 引数が数値かどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合は数値
	 */
	export function isNumber(value:any):boolean {
		return typeof value === 'number' && isFinite(value);
	}

	/**
	 * 引数が文字列値かどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合は文字列
	 */
	export function isString(value:any):boolean {
		return typeof value === 'string';
	}

	/**
	 * 引数がfunctionかどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合はfunction
	 */
	export function isFunction(value:any):boolean {
		return typeof value === 'function';
	}

	/**
	 * 引数がオブジェクトかどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合はobject
	 */
	export function isObject(value:any):boolean {
		return value !== null && typeof value === 'object';
	}

	/**
	 * 引数が配列かどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合は配列
	 */
	export function isArray(value:any):boolean {
		return Array.isArray(value);
	}

	/**
	 * 引数が空（null or undefined）かどうかを判断する
	 * @param {number} value 入力値
	 * @returns {boolean} trueの場合は空
	 */
	export function isNull(value:any):boolean {
		return value === null || typeof value === 'undefined';
	}
}
