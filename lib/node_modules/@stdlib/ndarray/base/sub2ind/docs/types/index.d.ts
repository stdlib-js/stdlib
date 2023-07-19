/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Converts subscripts to a linear index.
*
* ## Notes
*
* -   The function accepts the following "modes":
*
*     -   `throw`: throws an error when a subscript exceeds array dimensions.
*     -   `wrap`: wrap around subscripts exceeding array dimensions using modulo arithmetic.
*     -   `clamp`: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
*
* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
*
* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.
*
*     ```text
*     Dims: 2x2
*     Buffer: [ 1, 2, 3, 4 ]
*
*     View = [ a00, a01,
*              a10, a11 ]
*
*     Strides: 2,1
*     Offset: 0
*
*     View = [ 1, 2,
*              3, 4 ]
*
*     Strides: 2,-1
*     Offset: 1
*
*     View = [ 2, 1,
*              4, 3 ]
*
*     Strides: -2,1
*     Offset: 2
*
*     View = [ 3, 4,
*              1, 2 ]
*
*     Strides: -2,-1
*     Offset: 3
*
*     View = [ 4, 3,
*              2, 1 ]
*     ```
*
*     ```javascript
*     var shape = [ 2, 2 ];
*     var strides = [ -2, 1 ];
*     var offset = 2;
*     var mode = [ 'throw' ];
*
*     // From the perspective of a view...
*     var idx = sub2ind( shape, strides, 0, 0, 0, mode );
*     // returns 0
*
*     idx = sub2ind( shape, strides, 0, 0, 1, mode );
*     // returns 1
*
*     idx = sub2ind( shape, strides, 0, 1, 0, mode );
*     // returns 2
*
*     idx = sub2ind( shape, strides, 0, 1, 1, mode );
*     // returns 3
*
*     // From the perspective of an underlying buffer...
*     idx = sub2ind( shape, strides, offset, 0, 0, mode );
*     // returns 2
*
*     idx = sub2ind( shape, strides, offset, 0, 1, mode );
*     // returns 3
*
*     idx = sub2ind( shape, strides, offset, 1, 0, mode );
*     // returns 0
*
*     idx = sub2ind( shape, strides, offset, 1, 1, mode );
*     // returns 1
*     ```
*
*     In short, from the perspective of a view, view data is always ordered.
*
*
* @param shape - array shape
* @param strides - stride array
* @param offset - location of the first indexed value **based** on the stride array
* @param args - subscripts followed by a `mode` specifying how to handle subscripts which exceed array dimensions
* @param mode - specifies how to handle subscripts which exceed array dimensions
* @throws must provide subscripts which do not exceed array dimensions
* @returns linear index
*
* @example
* var shape = [ 3, 3, 3 ];
* var strides = [ 9, 3, 1 ];
* var offset = 0;
* var mode = [ 'throw' ]
*
* var idx = sub2ind( shape, strides, offset, 1, 2, 2, mode );
* // returns 17
*/
declare function sub2ind( shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, ...args: Array<number | Array<string>> ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = sub2ind;
