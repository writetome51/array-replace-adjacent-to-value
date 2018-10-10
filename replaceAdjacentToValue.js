"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var _replaceAdjacentItems_1 = require("@writetome51/array-replace-adjacent-items/_replaceAdjacentItems");
// info = {value: anyExceptObject, offset: positive/negative integer, howMany: number of items to replace}
// info.howMany doesn't have to be the same number as the length of newValues.  For example, you could
// set info.howMany to 2 and have newValues contain 4 items.  2 items will be replaced with 4.
// Also, remember this function only looks for the first instance of info.value
function replaceAdjacentToValue(info, newValues, array) {
    // This validates info.value and array:
    var index = getFirstIndexOf_1.getFirstIndexOf(info.value, array);
    errorIfNotInteger_1.errorIfNotInteger(info.offset);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        // This validates info.howMany and checks if array is too short to meet request:
        _replaceAdjacentItems_1._replaceAdjacentItems(index, info.howMany, newValues, array);
    });
}
exports.replaceAdjacentToValue = replaceAdjacentToValue;
