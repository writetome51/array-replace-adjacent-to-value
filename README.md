To include in your project:

import {replaceAdjacentToValue} from '@writetome51/array-replace-adjacent-to-value';

Function replaces adjacent items near (or including) a specified value in the array.  
(It only applies to the first found instance of the specified value)

replaceAdjacentToValue(info, newValues, array): void

'info' must be an object with these properties:

    value:  the value we're searching for in the array (anything but an object)

    howMany:  integer greater than zero.  The number of adjacent items being replaced.  
            This does not have to be the same as the number of items in newValues  (see above).

    offset:  integer, that decides at what position to begin replacing items.  If 0, the first  
        item to be replaced is the value being searched for.  If -1, replacing begins one place 
        to the left of the value being searched for.  If 1, replacing begins one place to the 
        right of the value being searched for.  It can be any integer.

Examples:

    let arr = [1, 2, 3, 4, 5, 5];

    let info = {value: 3, howMany: 2, offset: -1};  
    replaceAdjacentToValue(info, [3, 4], arr);  
    // arr is now [ 1, 3, 4, 4, 5, 5 ]

    info = {value: 3, howMany: 3, offset: 0};  
    replaceAdjacentToValue(info, [3, 4], arr);  
    // arr is now [ 1, 3, 4, 5, 5 ]

    info = {value: 5, howMany: 1, offset: -1};  
    replaceAdjacentToValue(info, [4.5], arr);  
    // arr is now [ 1, 3, 4.5, 5, 5 ]
