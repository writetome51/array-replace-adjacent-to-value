import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { errorIfIndexNotValidAfterOffsetWasAdded }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';


/**********************
 Replaces `howMany` adjacent items in `array` with `newValues`, starting at, or
 close to, `value`. Exactly where the replacing begins is decided by `offset`,
 which is the position, relative to `value`, where to begin replacing.
 For example, if `offset` is 0, then replacing begins at `value`. If -1,
 it begins one place to the left of value. If 1, it begins one place to the
 right.

 Note: the function only works with the first found instance of `value`.
 ***********************/

export function replaceAdjacentToValue(
	// info = {value: anyExceptObject, offset: integer, howMany: integer (num items to replace) }
	info: IAdjacentToValueInfo,
	newValues: any[],
	array
): void {

	// This validates info.value and array:
	let index = getFirstIndexOf(info.value, array);
	errorIfNotInteger(info.offset);

	ifIndexNotNegative_getActionResult(index, () => {
		index += info.offset;
		errorIfIndexNotValidAfterOffsetWasAdded(index, array);

		// This validates info.howMany and checks if array is too short to meet request:
		_replaceAdjacentItems(index, info.howMany, newValues, array);
	});
}
