import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic/getFirstIndexOf';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items/_replaceAdjacentItems';


// info = {value: anyExceptObject, offset: positive/negative integer, howMany: number of items to replace}
// info.howMany doesn't have to be the same number as the length of newValues.  For example, you could
// set info.howMany to 2 and have newValues contain 4 items.  2 items will be replaced with 4.
// Also, remember this function only looks for the first instance of info.value

export function replaceAdjacentToValue(
	info: IAdjacentToValueInfo, newValues: any[], array
): void {
	// This validates info.value and array:
	let index = getFirstIndexOf(info.value, array);
	errorIfNotInteger(info.offset);

	ifIndexNotNegative_getActionResult(index, () => {
		index += info.offset;
		// This validates info.howMany and checks if array is too short to meet request:
		_replaceAdjacentItems(index, info.howMany, newValues, array);
	});
}
