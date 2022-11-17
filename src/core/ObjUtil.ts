import {Type} from "../type/Type";

export namespace ObjUtil {

	export function each(target:any, func:(key:string, value:any) => void):void {
		if (!Type.isObject(target)) return;
		Object.keys(target).forEach((key:string):void => {
			func(key, target[key]);
		});
	}

	export function get(target:any, key:string, defaultValue:any):any {
		const value:any = target[key];
		return !Type.isNull(value) ? value : defaultValue;
	}
}
