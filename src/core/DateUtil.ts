export module DateUtil {

	/**
	 * 現在の時刻(ミリ秒)を取得する
	 * @returns {number} UNIX時間（ミリ秒）
	 */
	export function now():number {
		if (!nowFunction) nowFunction = getNowFunction();
		return nowFunction();
	}

	function getNowFunction():() => number {
		// for node.js
		// https://nodejs.org/api/process.html#processhrtimetime
		if (self && self['process'] && self['process'].hrtime !== undefined) {
			const f = self['process'].hrtime;
			return ():number => {
				const t = f();
				// process.hrtime returns a array of [seconds, nanoseconds]
				return t[0] * 1000 + t[1] / 1000000;
			};
		}
		// for browser (supported window.performance)
		// https://developer.mozilla.org/ja/docs/Web/API/Performance/now
		if (window?.performance?.now !== undefined) {
			return window.performance.now.bind(window.performance);
		}
		// for browser (supported Date.now)
		// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now
		if (window?.Date?.now !== undefined) {
			return window.Date.now.bind(window.Date);
		}
		// else
		// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
		return ():number => {
			return new Date().getTime();
		};
	}

	let nowFunction:() => number = null;
}
