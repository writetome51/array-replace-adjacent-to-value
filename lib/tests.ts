import { replaceAdjacentToValue } from './replaceAdjacentToValue';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


let arr = [1, 2, 3, 4, 5];

let info: IAdjacentToValueInfo = {value: 3, howMany: 2, offset: -1};
replaceAdjacentToValue(info, [3, 4], arr);
// --> [ 1, 3, 4, 4, 5 ]

console.log(arr);

info = {value: 3, howMany: 3, offset: 0};
replaceAdjacentToValue(info, [3, 4], arr);
// --> [ 1, 3, 4, 5 ]

console.log(arr);

info = {value: 5, howMany: 1, offset: -1};
replaceAdjacentToValue(info, [4.5], arr);
// --> [ 1, 3, 4.5, 5 ]

console.log(arr);


// Should trigger error:
info = {value: 5, howMany: 1, offset: -4};
// replaceAdjacentToValue(info, [4.5], arr);


// Should trigger error:
info = {value: 5, howMany: 0, offset: -1};
// replaceAdjacentToValue(info, [4.5], arr);


// Should trigger error:
// replaceAdjacentToValue({value: {}, offset: -1, howMany: 1},[4.5],arr);
