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
import { Mode, Order } from '@stdlib/types/ndarray';

/**
* Converts a linear index to an array of subscripts.
*
* ## Notes
*
* -   The function accepts the following "modes":
*
*     -   `throw`: throws an error when a linear index exceeds array dimensions.
*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
*
* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.
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
*     var order = 'row-major';
*     var strides = [ -2, 1 ];
*     var offset = 2;
*     var mode = 'throw';
*
*     // From the perspective of a view...
*     var s = ind2sub( shape, strides, 0, order, 0, mode );
*     // returns [ 0, 0 ]
*
*     s = ind2sub( shape, strides, 0, order, 1, mode );
*     // returns [ 0, 1 ]
*
*     s = ind2sub( shape, strides, 0, order, 2, mode );
*     // returns [ 1, 0 ]
*
*     s = ind2sub( shape, strides, 0, order, 3, mode );
*     // returns [ 1, 1 ]
*
*     // From the perspective of an underlying buffer...
*     s = ind2sub( shape, strides, offset, order, 0, mode );
*     // returns [ 1, 0 ]
*
*     s = ind2sub( shape, strides, offset, order, 1, mode );
*     // returns [ 1, 1 ]
*
*     s = ind2sub( shape, strides, offset, order, 2, mode );
*     // returns [ 0, 0 ]
*
*     s = ind2sub( shape, strides, offset, order, 3, mode );
*     // returns [ 0, 1 ]
*     ```
*
*     In short, from the perspective of a view, view data is always ordered.
*
*
* @param shape - array shape
* @param strides - stride array
* @param offset - location of the first indexed value **based** on the stride array
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param idx - linear index
* @param mode - specifies how to handle a linear index which exceeds array dimensions
* @throws linear index must not exceed array dimensions
* @returns subscripts
*
* @example
* var shape = [ 3, 3, 3 ];
* var strides = [ 9, 6, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var s = ind2sub( shape, strides, offset, order, 17, 'throw' );
* // returns [ 1, 2, 2 ]
*/
declare function ind2sub( shape: ArrayLike<number>, strides: ArrayLike<number>, offset: number, order: Order, idx: number, mode: Mode ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = ind2sub;
