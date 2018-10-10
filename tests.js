"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceAdjacentToValue_1 = require("./replaceAdjacentToValue");
var arr = [1, 2, 3, 4, 5];
var info = { value: 3, howMany: 2, offset: -1 };
replaceAdjacentToValue_1.replaceAdjacentToValue(info, [3, 4], arr);
// --> [ 1, 3, 4, 4, 5 ]
console.log(arr);
info = { value: 3, howMany: 3, offset: 0 };
replaceAdjacentToValue_1.replaceAdjacentToValue(info, [3, 4], arr);
// --> [ 1, 3, 4, 5 ]
console.log(arr);
info = { value: 5, howMany: 1, offset: -1 };
replaceAdjacentToValue_1.replaceAdjacentToValue(info, [4.5], arr);
// --> [ 1, 3, 4.5, 5 ]
console.log(arr);
// Should trigger error:
info = { value: 5, howMany: 0, offset: -1 };
replaceAdjacentToValue_1.replaceAdjacentToValue(info, [4.5], arr);
