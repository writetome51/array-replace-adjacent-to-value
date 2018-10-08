import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic/getFirstIndexOf';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest';
import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


// info = {value: anyExceptObject, offset: positive/negative integer, howMany: number of items to replace}
// info.howMany doesn't have to be the same number as the length of newValues.  For example, you could
// set info.howMany to 2 and have newValues contain 4 items.  2 items will be replaced with 4.
// Also, remember this function only looks for the first instance of info.value

export function replaceAdjacentToValue(
	info: IAdjacentToValueInfo, newValues: any[], array
): void {
	checkDataValidity();
	let index = getFirstIndexOf(info.value, array);

	ifIndexNotNegative_getActionResult(index, () => {
		index += info.offset;
		errorIfArrayTooShortToMeetAdjacentItemsRequest(
			index, info.howMany, array
		);
		array.splice(index, info.howMany, ...newValues);
	});


	function checkDataValidity() {
		errorIfValuesAreNotArrays([newValues, array]);
		errorIfNotInteger(info.offset);
		errorIfNotIntegerZeroOrGreater(info.howMany);
	}
}
