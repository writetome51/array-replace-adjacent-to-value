"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var error_if_index_not_valid_after_offset_was_added_1 = require("error-if-index-not-valid-after-offset-was-added");
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
    error_if_index_is_negative_1.errorIfIndexIsNegative(index);
    error_if_not_integer_1.errorIfNotInteger(info.offset);
    index += info.offset;
    error_if_index_not_valid_after_offset_was_added_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    // This validates info.howMany and checks if array is too short to meet request:
    array_replace_adjacent_items_1._replaceAdjacentItems(index, info.howMany, newValues, array);
}
exports.replaceAdjacentToValue = replaceAdjacentToValue;
