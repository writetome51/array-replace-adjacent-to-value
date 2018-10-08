"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// info = {value: anyExceptObject, offset: positive/negative integer, howMany: number of items to replace}
// info.howMany doesn't have to be the same number as the length of newValues.  For example, you could
// set info.howMany to 2 and have newValues contain 4 items.  2 items will be replaced with 4.
// Also, remember this function only looks for the first instance of info.value
function replaceAdjacentToValue(info, newValues, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([newValues, array]);
    var index = getFirstIndexOf_1.getFirstIndexOf(info.value, array);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
        array.splice.apply(array, [index, info.howMany].concat(newValues));
    });
}
exports.replaceAdjacentToValue = replaceAdjacentToValue;
