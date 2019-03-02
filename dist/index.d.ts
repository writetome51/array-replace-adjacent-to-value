import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


/**********************
 Replaces `howMany` adjacent items in `array` with `newValues`, starting at, or
 close to, `value`. Exactly where the replacing begins is decided by `offset`,
 which is the position, relative to `value`, where to begin replacing.
 For example, if `offset` is 0, then replacing begins at `value`. If -1,
 it begins one place to the left of value. If 1, it begins one place to the
 right.

 Note: the function only works with the first found instance of `value`.
 ***********************/

export declare function replaceAdjacentToValue(
	// info = {value: anyExceptObject, offset: integer, howMany: integer (num items to replace) }
	info: IAdjacentToValueInfo,
	newValues: any[],
	array: any[]
): void;
