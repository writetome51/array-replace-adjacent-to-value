"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var errorIfArrayTooShortToMeetAdjacentItemsRequest_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
// info = {value: anyExceptObject, offset: positive/negative integer, howMany: number of items to replace}
// info.howMany doesn't have to be the same number as the length of newValues.  For example, you could
// set info.howMany to 2 and have newValues contain 4 items.  2 items will be replaced with 4.
// Also, remember this function only looks for the first instance of info.value
function replaceAdjacentToValue(info, newValues, array) {
    checkDataValidity();
    var index = getFirstIndexOf_1.getFirstIndexOf(info.value, array);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        errorIfArrayTooShortToMeetAdjacentItemsRequest_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(index, info.howMany, array);
        array.splice.apply(array, [index, info.howMany].concat(newValues));
    });
    function checkDataValidity() {
        error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([newValues, array]);
        errorIfNotInteger_1.errorIfNotInteger(info.offset);
        errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(info.howMany);
    }
}
exports.replaceAdjacentToValue = replaceAdjacentToValue;
