"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var arr = [1, 2, 3, 4, 5];
var info = { value: 3, howMany: 2, offset: -1 };
_1.replaceAdjacentToValue(info, [3, 4], arr);
console.log(arr); // --> [ 1, 3, 4, 4, 5 ]
info = { value: 3, howMany: 3, offset: 0 };
_1.replaceAdjacentToValue(info, [3, 4], arr);
console.log(arr); // --> [ 1, 3, 4, 5 ]
info = { value: 5, howMany: 1, offset: -1 };
_1.replaceAdjacentToValue(info, [4.5], arr);
console.log(arr); // --> [ 1, 3, 4.5, 5 ]
// Should trigger error:
info = { value: 5, howMany: 1, offset: -4 };
// replaceAdjacentToValue(info, [4.5], arr);
// Should trigger error:
info = { value: 5, howMany: 0, offset: -1 };
// replaceAdjacentToValue(info, [4.5], arr);
// Should trigger error:
// replaceAdjacentToValue({value: {}, offset: -1, howMany: 1},[4.5],arr);
