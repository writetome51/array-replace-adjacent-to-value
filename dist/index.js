"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
var array_replace_adjacent_items_1 = require("@writetome51/array-replace-adjacent-items");
/**********************
 Replaces `howMany` adjacent items in `array` with `newValues`, starting at, or
 close to, `value`. Exactly where the replacing begins is decided by `offset`,
 which is the position, relative to `value`, where to begin replacing.
 For example, if `offset` is 0, then replacing begins at `value`. If -1,
 it begins one place to the left of value. If 1, it begins one place to the
 right.

 Note: the function only works with the first found instance of `value`.
 ***********************/
function replaceAdjacentToValue(
// info = {value: anyExceptObject, offset: integer, howMany: integer (num items to replace) }
info, newValues, array) {
    // This validates info.value and array:
    var index = array_get_indexes_1.getFirstIndexOf(info.value, array);
    errorIfNotInteger_1.errorIfNotInteger(info.offset);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
        // This validates info.howMany and checks if array is too short to meet request:
        array_replace_adjacent_items_1._replaceAdjacentItems(index, info.howMany, newValues, array);
    });
}
exports.replaceAdjacentToValue = replaceAdjacentToValue;
