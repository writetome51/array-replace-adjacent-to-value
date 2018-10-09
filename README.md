Function that replaces adjacent items near (or including) a specified value in the array.

replaceAdjacentToValue(info, newValues, array);

'info' must be an object with these properties:

value:  the value we're searching for in the array (anything but an object)

howMany:  integer, the number of adjacent items being replaced.  This does not have to be the same as 
	    the number of items in the newValues array (see above).

offset:  integer, negative or positive, that decides at what position to begin replacing items.  If 0, 
	    the first item to be replaced is the value being searched for.  If -1, replacing begins at the item
	    just before the value being searched for.  If 1, replacing begins at the item just after the value
	    being searched for.  It can be any integer.