export declare module ArrUtil {
    /**
     * 等差数列を生成する
     * @param {number} count 要素数
     * @param {number} init 初期値
     * @param {number} step 等差
     * @returns {number[]} 出力配列
     */
    function sequence(count: number, init?: number, step?: number): number[];
    /**
     * 重複を削除したリストを生成する
     * @param list 入力配列
     * @returns {T[]} 出力配列
     */
    function unique<T>(list: T[]): T[];
    /**
     * 重複のみを抽出したリストを生成する
     * @param list 入力配列
     * @param unique trueの場合は、重複したものの中を重複しないようにする
     * @returns {T[]} 出力配列
     */
    function duplicated<T>(list: T[], unique?: boolean): T[];
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
    function roundRobin<T>(list1: T[], list2: T[], callback: (count: number, index1: number, index2: number, element1: T, element2: T) => void): void;
    /**
     * リスト内の要素を入れ替える
     * @param list 入出力配列
     * @param index1 インデックス1
     * @param index2 インデックス2
     */
    function swap<T>(list: T[], index1: number, index2: number): void;
    /**
     * リストをシャッフルする
     * by Fisher–Yatesアルゴリズム
     * @param list 入出力配列
     */
    function shuffle<T>(list: T[]): void;
    /**
     * リストを数値としてソートする
     * @param list 入出力配列
     * @param asc trueで昇順, falseで降順
     */
    function sort(list: number[], asc?: boolean): void;
    /**
     * リストから1要素を選択して返す、元の配列は変更しない
     * @param list 配列
     * @returns {T} 選択された要素
     */
    function choose<T>(list: T[]): T;
    /**
     * 空要素を削除した配列を返す、元の配列は変更しない
     * Booleanのコンストラクタを使って判定しているため、0も削除される
     * @param list 入力配列
     * @returns {T[]} 出力配列
     */
    function clean<T>(list: T[]): T[];
    /**
     * 元の配列に対して、指定した関数を各要素に実行してfalseを返した要素を削除する
     * @param list 入力配列
     * @param f 各要素に実行する関数、falseを返すとその要素が削除される
     */
    function update<T>(list: T[], f: (item: T) => (void | boolean)): void;
}
