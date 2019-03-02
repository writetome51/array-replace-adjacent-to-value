## replaceAdjacentToValue(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: anyExceptObject,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset: integer,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany: integer_greater_than_zero<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces `howMany` adjacent items in `array` with `newValues`, starting at, or  
close to, `value`.  Exactly where the replacing begins is decided by `offset`,  
which is the position, relative to `value`, where to begin replacing.  
For example, if `offset` is 0, then replacing begins at `value`.  If -1,  
it begins one place to the left of `value`.  If 1, it begins one place to the  
right.  

Note: the function only works with the first found instance of `value`.


### Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7];
 
replaceAdjacentToValue(
    {value: 3, howMany: 2, offset: 1}, 
    [8],  
    arr
);  
// arr is now [ 1, 2, 3, 8, 6, 7 ]

arr = [1, 2, 3, 4, 5, 6, 7];
  
replaceAdjacentToValue(
    {value: 3, howMany: 3, offset: 0}, 
    [8, 9], 
    arr
);  
// arr is now [ 1, 2, 8, 9, 6, 7 ]
  
arr = [1, 2, 3, 4, 5, 6, 7, 5];

replaceAdjacentToValue(
    {value: 5, howMany: 1, offset: -2}, 
    [10, 20], 
    arr
);  
// arr is now [ 1, 2, 10, 20, 4, 5, 6, 7, 5 ]
```

### Installation
`npm i  @writetome51/array-replace-adjacent-to-value`

### Loading
```
// if using TypeScript:
import {replaceAdjacentToValue} from '@writetome51/array-replace-adjacent-to-value';
// if using ES5 JavaScript:
var replaceAdjacentToValue = 
	require('@writetome51/array-replace-adjacent-to-value').replaceAdjacentToValue;
```