/*! alm-coreutil.js 1.0.13 (c) 2022 alumican, licensed under the MIT, more information https://github.com/alumican/alm-coreutil.js */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.alm = global.alm || {}));
})(this, (function (exports) { 'use strict';

    exports.Type = void 0;
    (function (Type) {
        /**
         * 引数がbooleanかどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合はboolean
         */
        function isBoolean(value) {
            return typeof value === 'boolean';
        }
        Type.isBoolean = isBoolean;
        /**
         * 引数が数値かどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合は数値
         */
        function isNumber(value) {
            return typeof value === 'number' && isFinite(value);
        }
        Type.isNumber = isNumber;
        /**
         * 引数が文字列値かどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合は文字列
         */
        function isString(value) {
            return typeof value === 'string';
        }
        Type.isString = isString;
        /**
         * 引数がfunctionかどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合はfunction
         */
        function isFunction(value) {
            return typeof value === 'function';
        }
        Type.isFunction = isFunction;
        /**
         * 引数がオブジェクトかどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合はobject
         */
        function isObject(value) {
            return value !== null && typeof value === 'object';
        }
        Type.isObject = isObject;
        /**
         * 引数が配列かどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合は配列
         */
        function isArray(value) {
            return Array.isArray(value);
        }
        Type.isArray = isArray;
        /**
         * 引数が空（null or undefined）かどうかを判断する
         * @param {number} value 入力値
         * @returns {boolean} trueの場合は空
         */
        function isNull(value) {
            return value === null || typeof value === 'undefined';
        }
        Type.isNull = isNull;
    })(exports.Type || (exports.Type = {}));

    exports.ArrUtil = void 0;
    (function (ArrUtil) {
        /**
         * 等差数列を生成する
         * @param {number} count 要素数
         * @param {number} init 初期値
         * @param {number} step 等差
         * @returns {number[]} 出力配列
         */
        function sequence(count, init = 0, step = 1) {
            const result = new Array(count);
            let v = init;
            for (let i = 0; i < count; ++i) {
                result[i] = v;
                v += step;
            }
            return result;
        }
        ArrUtil.sequence = sequence;
        /**
         * 重複を削除したリストを生成する
         * @param list 入力配列
         * @returns {T[]} 出力配列
         */
        function unique(list) {
            return list.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
        }
        ArrUtil.unique = unique;
        /**
         * 重複のみを抽出したリストを生成する
         * @param list 入力配列
         * @param unique trueの場合は、重複したものの中を重複しないようにする
         * @returns {T[]} 出力配列
         */
        function duplicated(list, unique = false) {
            if (unique) {
                return list.filter(function (x, i, self) {
                    return self.indexOf(x) !== self.lastIndexOf(x);
                });
            }
            else {
                return list.filter(function (x, i, self) {
                    return (self.indexOf(x) === i) && (self.lastIndexOf(x) !== i);
                });
            }
        }
        ArrUtil.duplicated = duplicated;
        /**
         * 2つの入力配列に対して総当たり戦をおこなう
         * @param {T[]} list1 入力配列1
         * @param {T[]} list2 入力配列2
         * @param {(count: number, index1: number, index2: number, element1: T, element2: T) => void} callback コールバック関数
         * @param callback.count コールバックの呼ばれた回数
         * @param callback.index1 入力配列1の現在のインデックス
         * @param callback.index2 入力配列2の現在のインデックス
         * @param callback.element1 入力配列1の現在の要素
         * @param callback.element2 入力配列2の現在の要素
         */
        function roundRobin(list1, list2, callback) {
            let i, j, p = 1;
            const m = list1.length;
            const n = list2.length;
            for (i = 0; i < m; ++i) {
                for (j = i + 1; j < n; ++j) {
                    callback(p++, i, j, list1[i], list2[j]);
                }
            }
        }
        ArrUtil.roundRobin = roundRobin;
        /**
         * リスト内の要素を入れ替える
         * @param list 入出力配列
         * @param index1 インデックス1
         * @param index2 インデックス2
         */
        function swap(list, index1, index2) {
            const tmp = list[index1];
            list[index1] = list[index2];
            list[index2] = tmp;
        }
        ArrUtil.swap = swap;
        /**
         * リストをシャッフルする
         * by Fisher–Yatesアルゴリズム
         * @param list 入出力配列
         */
        function shuffle(list) {
            for (let i = list.length - 1; i > 0; --i) {
                swap(list, i, Math.floor(Math.random() * (i + 1)));
            }
        }
        ArrUtil.shuffle = shuffle;
        /**
         * リストを数値としてソートする
         * @param list 入出力配列
         * @param asc trueで昇順, falseで降順
         */
        function sort(list, asc = true) {
            list.sort(asc ? function (a, b) { return a - b; } : function (a, b) { return b - a; });
        }
        ArrUtil.sort = sort;
        /**
         * リストから1要素を選択して返す、元の配列は変更しない
         * @param list 配列
         * @returns {T} 選択された要素
         */
        function choose(list) {
            return list[Math.floor(Math.random() * list.length)];
        }
        ArrUtil.choose = choose;
        /**
         * 空要素を削除した配列を返す、元の配列は変更しない
         * Booleanのコンストラクタを使って判定しているため、0も削除される
         * @param list 入力配列
         * @returns {T[]} 出力配列
         */
        function clean(list) {
            return list.filter(Boolean);
        }
        ArrUtil.clean = clean;
        /**
         * 元の配列に対して、指定した関数を各要素に実行してfalseを返した要素を削除する
         * @param list 入力配列
         * @param f 各要素に実行する関数、falseを返すとその要素が削除される
         */
        function update(list, f) {
            let n = list.length;
            for (let i = 0; i < n; ++i) {
                const item = list[i];
                if (f(item) === false) {
                    list.splice(i, 1);
                    --i;
                    --n;
                }
            }
        }
        ArrUtil.update = update;
    })(exports.ArrUtil || (exports.ArrUtil = {}));

    exports.DateUtil = void 0;
    (function (DateUtil) {
        /**
         * 現在の時刻(ミリ秒)を取得する
         * @returns {number} UNIX時間（ミリ秒）
         */
        function now() {
            if (!nowFunction)
                nowFunction = getNowFunction();
            return nowFunction();
        }
        DateUtil.now = now;
        function getNowFunction() {
            var _a, _b;
            // for node.js
            // https://nodejs.org/api/process.html#processhrtimetime
            if (self && self['process'] && self['process'].hrtime !== undefined) {
                const f = self['process'].hrtime;
                return () => {
                    const t = f();
                    // process.hrtime returns a array of [seconds, nanoseconds]
                    return t[0] * 1000 + t[1] / 1000000;
                };
            }
            // for browser (supported window.performance)
            // https://developer.mozilla.org/ja/docs/Web/API/Performance/now
            if (((_a = window === null || window === void 0 ? void 0 : window.performance) === null || _a === void 0 ? void 0 : _a.now) !== undefined) {
                return window.performance.now.bind(window.performance);
            }
            // for browser (supported Date.now)
            // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now
            if (((_b = window === null || window === void 0 ? void 0 : window.Date) === null || _b === void 0 ? void 0 : _b.now) !== undefined) {
                return window.Date.now.bind(window.Date);
            }
            // else
            // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
            return () => {
                return new Date().getTime();
            };
        }
        let nowFunction = null;
    })(exports.DateUtil || (exports.DateUtil = {}));

    exports.NumUtil = void 0;
    (function (NumUtil) {
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
        function map(value, srcA, srcB, dstA, dstB, clamp = true) {
            if (srcA === srcB)
                return dstA;
            if (clamp) {
                if (srcA < srcB) {
                    if (value < srcA)
                        value = srcA;
                    else if (value > srcB)
                        value = srcB;
                }
                else {
                    if (value < srcB)
                        value = srcB;
                    else if (value > srcA)
                        value = srcA;
                }
            }
            return (value - srcA) * (dstB - dstA) / (srcB - srcA) + dstA;
        }
        NumUtil.map = map;
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
        function ease(value, srcA, srcB, dstA, dstB, easing) {
            if (srcA === srcB)
                return dstA;
            if (srcA < srcB) {
                if (value < srcA)
                    value = srcA;
                else if (value > srcB)
                    value = srcB;
                return easing((value - srcA) / (srcB - srcA)) * (dstB - dstA) + dstA;
            }
            else {
                if (value < srcB)
                    value = srcB;
                else if (value > srcA)
                    value = srcA;
                return easing((value - srcB) / (srcA - srcB)) * (dstB - dstA) + dstA;
            }
        }
        NumUtil.ease = ease;
        /**
         * 値を特定範囲内に丸める
         * @param {number} value 入力値
         * @param {number} min 最小値
         * @param {number} max 最大値
         * @returns {number} 出力値
         */
        function clamp(value, min, max) {
            return value < min ? min : (value > max ? max : value);
        }
        NumUtil.clamp = clamp;
        /**
         * 符号を保ったまま、値の絶対値を特定範囲内に丸める
         * @param {number} value 入力値
         * @param {number} minAbs 最小値
         * @param {number} maxAbs 最大値
         * @returns {number} 出力値
         */
        function clampAbs(value, minAbs, maxAbs) {
            if (value > 0) {
                return value < minAbs ? minAbs : (value > maxAbs ? maxAbs : value);
            }
            else {
                value = Math.abs(value);
                return -(value < minAbs ? minAbs : (value > maxAbs ? maxAbs : value));
            }
        }
        NumUtil.clampAbs = clampAbs;
        /**
         * 2点間を線形補間する
         * @param {number} t 補間値
         * @param {number} a 開始値
         * @param {number} b 終了値
         * @param {boolean} clamp trueの場合は補間値を[a, b]の範囲内に丸める
         * @returns {number} 出力値 (t=0のときa, t=1のときb)
         */
        function lerp(t, a, b, clamp = true) {
            if (clamp) {
                if (t < 0)
                    t = 0;
                else if (t > 1)
                    t = 1;
            }
            return a * (1 - t) + b * t;
        }
        NumUtil.lerp = lerp;
        /**
         * 乱数（小数）を取得する
         * @param {number} min 最小値
         * @param {number} max 最大値
         * @returns {number} 出力値
         */
        function random(min = 0, max = 1) {
            return min + (max - min) * Math.random();
        }
        NumUtil.random = random;
        /**
         * 乱数（整数）を取得する
         * @param {number} min 最小値
         * @param {number} max 最大値
         * @returns {number} 出力値
         */
        function randomInt(min = 0, max = 1) {
            return Math.floor(random(min, max + 1));
        }
        NumUtil.randomInt = randomInt;
        /**
         * 正負方向の同じ範囲で乱数を取得する
         * @param {number} min 最小値（正の数）
         * @param {number} max 最大値（正の数）
         * @returns {number} 出力値
         */
        function randomAbs(min = 0, max = 1) {
            return random(min, max) * randomSign();
        }
        NumUtil.randomAbs = randomAbs;
        /**
         * +1もしくは-1を返す
         * @returns {number} 出力値
         */
        function randomSign() {
            return Math.random() < 0.5 ? 1 : -1;
        }
        NumUtil.randomSign = randomSign;
        /**
         * 2点間の距離を取得する
         * @param {number} x1 点1のx座標
         * @param {number} y1 点1のy座標
         * @param {number} x2 点2のx座標
         * @param {number} y2 点2のy座標
         * @param {boolean} squared trueの場合は2乗の値を取得する
         * @returns {number} 距離
         */
        function dist(x1, y1, x2, y2, squared = false) {
            const dx = x2 - x1;
            const dy = y2 - y1;
            return squared ? (dx * dx + dy * dy) : Math.sqrt(dx * dx + dy * dy);
        }
        NumUtil.dist = dist;
        /**
         * 値をラジアン法から弧度法に変換する
         * @param {number} radian ラジアン法
         * @returns {number} 弧度法
         */
        function radToDeg(radian) {
            return radian * RAD2DEG;
        }
        NumUtil.radToDeg = radToDeg;
        /**
         * 値を弧度法からラジアン法に変換する
         * @param {number} radian 弧度法
         * @returns {number} ラジアン法
         */
        function degToRad(degree) {
            return degree * DEG2RAD;
        }
        NumUtil.degToRad = degToRad;
        /**
         * ある角度からある角度への回転角度を取得する
         * @param {number} from 元の角度
         * @param {number} to 目標の角度
         * @param {boolean} radian trueの場合はラジアン法で計算する
         * @returns {number} 回転角度
         */
        function turn(from, to, radian = true) {
            return radian ? ((to - from + NumUtil.PI3) % NumUtil.PI2 - Math.PI) : ((to - from + 540) % 360 - 180);
        }
        NumUtil.turn = turn;
        // --------------------------------------------------
        //
        // CONST
        //
        // --------------------------------------------------
        NumUtil.PI = Math.PI;
        NumUtil.PI2 = Math.PI * 2;
        NumUtil.PI3 = Math.PI * 3;
        NumUtil.PI4 = Math.PI * 4;
        NumUtil.PI5 = Math.PI * 5;
        NumUtil.PI6 = Math.PI * 6;
        NumUtil.PI_2 = Math.PI / 2;
        NumUtil.PI_3 = Math.PI / 3;
        NumUtil.PI_4 = Math.PI / 4;
        NumUtil.PI_6 = Math.PI / 6;
        const RAD2DEG = 180 / Math.PI;
        const DEG2RAD = Math.PI / 180;
    })(exports.NumUtil || (exports.NumUtil = {}));

    exports.ObjUtil = void 0;
    (function (ObjUtil) {
        function each(target, func) {
            if (!exports.Type.isObject(target))
                return;
            Object.keys(target).forEach((key) => {
                func(key, target[key]);
            });
        }
        ObjUtil.each = each;
        function get(target, key, defaultValue) {
            const value = target[key];
            return !exports.Type.isNull(value) ? value : defaultValue;
        }
        ObjUtil.get = get;
    })(exports.ObjUtil || (exports.ObjUtil = {}));

    exports.StrUtil = void 0;
    (function (StrUtil) {
        /**
         * 時間を h:mm:ss の形式で取得する
         * @param {number} hours 時
         * @param {number} minutes 分
         * @param {number} seconds 秒
         * @returns {string} h:mm:ss 形式の文字列
         */
        function toTimeString(hours = 0, minutes = 0, seconds = 0) {
            seconds += minutes * 60 + hours * 3600;
            let h = Math.floor(seconds / 3600).toString();
            let m = Math.floor((seconds / 60) % 60).toString();
            let s = ('0' + Math.floor(seconds % 60)).substr(-2, 2);
            if (h !== '0') {
                return h + ':' + ('0' + m).substr(-2, 2) + ':' + s;
            }
            else {
                return m + ':' + s;
            }
        }
        StrUtil.toTimeString = toTimeString;
    })(exports.StrUtil || (exports.StrUtil = {}));

    exports.Easing = void 0;
    (function (Easing) {
        /**
         * Linear
         */
        function linear(t) {
            return t;
        }
        Easing.linear = linear;
        /**
         * Quad
         */
        function easeInQuad(t) {
            return (t /= 1) * t;
        }
        Easing.easeInQuad = easeInQuad;
        function easeOutQuad(t) {
            return -(t /= 1) * (t - 2);
        }
        Easing.easeOutQuad = easeOutQuad;
        function easeInOutQuad(t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t;
            return -0.5 * ((--t) * (t - 2) - 1);
        }
        Easing.easeInOutQuad = easeInOutQuad;
        /**
         * Cubic
         */
        function easeInCubic(t) {
            return (t /= 1) * t * t;
        }
        Easing.easeInCubic = easeInCubic;
        function easeOutCubic(t) {
            return (t = t - 1) * t * t + 1;
        }
        Easing.easeOutCubic = easeOutCubic;
        function easeInOutCubic(t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t;
            return 0.5 * ((t -= 2) * t * t + 2);
        }
        Easing.easeInOutCubic = easeInOutCubic;
        /**
         * Quart
         */
        function easeInQuart(t) {
            return (t /= 1) * t * t * t;
        }
        Easing.easeInQuart = easeInQuart;
        function easeOutQuart(t) {
            return -((t = t - 1) * t * t * t - 1);
        }
        Easing.easeOutQuart = easeOutQuart;
        function easeInOutQuart(t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t * t;
            return -0.5 * ((t -= 2) * t * t * t - 2);
        }
        Easing.easeInOutQuart = easeInOutQuart;
        /**
         * Quint
         */
        function easeInQuint(t) {
            return (t /= 1) * t * t * t * t;
        }
        Easing.easeInQuint = easeInQuint;
        function easeOutQuint(t) {
            return ((t = t - 1) * t * t * t * t + 1);
        }
        Easing.easeOutQuint = easeOutQuint;
        function easeInOutQuint(t) {
            if ((t /= 0.5) < 1)
                return 0.5 * t * t * t * t * t;
            return 0.5 * ((t -= 2) * t * t * t * t + 2);
        }
        Easing.easeInOutQuint = easeInOutQuint;
        /**
         * Sine
         */
        function easeInSine(t) {
            return -Math.cos(t * (Math.PI / 2)) + 1;
        }
        Easing.easeInSine = easeInSine;
        function easeOutSine(t) {
            return Math.sin(t * (Math.PI / 2));
        }
        Easing.easeOutSine = easeOutSine;
        function easeInOutSine(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
        }
        Easing.easeInOutSine = easeInOutSine;
        /**
         * Expo
         */
        function easeInExpo(t) {
            if (t === 0)
                return 0;
            return Math.pow(2, 10 * (t - 1));
        }
        Easing.easeInExpo = easeInExpo;
        function easeOutExpo(t) {
            if (t === 1)
                return 1;
            return -Math.pow(2, -10 * t) + 1;
        }
        Easing.easeOutExpo = easeOutExpo;
        function easeInOutExpo(t) {
            if (t === 0)
                return 0;
            if (t === 1)
                return 1;
            if ((t /= 0.5) < 1)
                return 0.5 * Math.pow(2, 10 * (t - 1));
            return 0.5 * (-Math.pow(2, -10 * --t) + 2);
        }
        Easing.easeInOutExpo = easeInOutExpo;
        /**
         * Circ
         */
        function easeInCirc(t) {
            return -(Math.sqrt(1 - (t /= 1) * t) - 1);
        }
        Easing.easeInCirc = easeInCirc;
        function easeOutCirc(t) {
            return Math.sqrt(1 - (t = t - 1) * t);
        }
        Easing.easeOutCirc = easeOutCirc;
        function easeInOutCirc(t) {
            if ((t /= 0.5) < 1)
                return -0.5 * (Math.sqrt(1 - t * t) - 1);
            return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }
        Easing.easeInOutCirc = easeInOutCirc;
        /**
         * Elastic
         */
        function createEaseInElastic(s = 1.70158) {
            return function (t) {
                let p = 0;
                let a = 1;
                if (t === 0)
                    return 0;
                if ((t /= 1) === 1)
                    return 1;
                if (p === 0)
                    p = 0.3;
                {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p);
            };
        }
        Easing.createEaseInElastic = createEaseInElastic;
        function createEaseOutElastic(s = 1.70158) {
            return function (t) {
                let p = 0;
                let a = 1;
                if (t === 0)
                    return 0;
                if ((t /= 1) === 1)
                    return 1;
                if (p === 0)
                    p = 0.3;
                {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
            };
        }
        Easing.createEaseOutElastic = createEaseOutElastic;
        function createEaseInOutElastic(s = 1.70158) {
            return function (t) {
                let p = 0;
                let a = 1;
                if (t === 0)
                    return 0;
                if ((t /= 0.5) === 2)
                    return 1;
                if (p === 0)
                    p = 0.3 * 1.5;
                {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                if (t < 1)
                    return -0.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p);
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
            };
        }
        Easing.createEaseInOutElastic = createEaseInOutElastic;
        function easeInElastic(t) {
            return Easing.defaultEaseInElastic(t);
        }
        Easing.easeInElastic = easeInElastic;
        function easeOutElastic(t) {
            return Easing.defaultEaseOutElastic(t);
        }
        Easing.easeOutElastic = easeOutElastic;
        function easeInOutElastic(t) {
            return Easing.defaultEaseInOutElastic(t);
        }
        Easing.easeInOutElastic = easeInOutElastic;
        Easing.defaultEaseInElastic = createEaseInElastic();
        Easing.defaultEaseOutElastic = createEaseOutElastic();
        Easing.defaultEaseInOutElastic = createEaseInOutElastic();
        /**
         * Back
         */
        function createEaseInBack(s = 1.70158) {
            return function (t) {
                return (t /= 1) * t * ((s + 1) * t - s);
            };
        }
        Easing.createEaseInBack = createEaseInBack;
        function createEaseOutBack(s = 1.70158) {
            return function (t) {
                return (t = t - 1) * t * ((s + 1) * t + s) + 1;
            };
        }
        Easing.createEaseOutBack = createEaseOutBack;
        function createEaseInOutBack(s = 1.70158) {
            return function (t) {
                if ((t /= 0.5) < 1)
                    return 0.5 * t * t * (((s *= 1.525) + 1) * t - s);
                return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
            };
        }
        Easing.createEaseInOutBack = createEaseInOutBack;
        function easeInBack(t) {
            return Easing.defaultEaseInBack(t);
        }
        Easing.easeInBack = easeInBack;
        function easeOutBack(t) {
            return Easing.defaultEaseOutBack(t);
        }
        Easing.easeOutBack = easeOutBack;
        function easeInOutBack(t) {
            return Easing.defaultEaseInOutBack(t);
        }
        Easing.easeInOutBack = easeInOutBack;
        Easing.defaultEaseInBack = createEaseInBack();
        Easing.defaultEaseOutBack = createEaseOutBack();
        Easing.defaultEaseInOutBack = createEaseInOutBack();
        /**
         * Bounce
         */
        function easeInBounce(t) {
            return 1 - easeOutBounce(1 - t);
        }
        Easing.easeInBounce = easeInBounce;
        function easeOutBounce(t) {
            if ((t /= 1) < (1 / 2.75)) {
                return 7.5625 * t * t;
            }
            else if (t < (2 / 2.75)) {
                return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
            }
            else if (t < (2.5 / 2.75)) {
                return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
            }
            else {
                return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
            }
        }
        Easing.easeOutBounce = easeOutBounce;
        function easeInOutBounce(t) {
            if (t < 0.5)
                return easeInBounce(t * 2) * 0.5;
            return easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
        }
        Easing.easeInOutBounce = easeInOutBounce;
    })(exports.Easing || (exports.Easing = {}));

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
