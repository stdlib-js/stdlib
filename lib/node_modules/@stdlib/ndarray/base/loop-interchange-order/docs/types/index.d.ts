/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned array has the following elements:
*
*     ```text
*     [ <shape>, ...<strides> ]
*     ```
*
*     where
*
*     -   **shape**: dimensions sorted in loop order.
*     -   **...strides**: strides for each respective ndarray sorted in loop order.
*
* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
*
*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
*
* -   Cache performance may be degraded if the layout order (i.e., row-major or column-major) differs for the input and output ndarrays. This function is intended to optimize cache performance for the most common layout order. Accordingly, if the output ndarray has a different layout order (e.g., if the input ndarrays are row-major and the output ndarray is column-major), cache misses are likely for the output ndarray. In general, to ensure best performance, input and output ndarrays should have the same layout order.
*
* -   The function assumes that the input and output ndarrays have the same shape. Hence, loop interchange order should only be determined **after** broadcasting.
*
* @param shape - array dimensions
* @param strides - list of stride arrays containing the stride lengths for each input and output ndarray
* @returns loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
* var sy = [ 24, 8, 1 ]; // row-major
* var sz = [ 1, -2, 6 ]; // column-major
*
* var o = loopOrder( shape, [ sx, sy, sz ] );
* // returns {...}
*
* var ssh = o[ 0 ];
* // returns [ 4, 3, 2 ]
*
* var ssx = o[ 1 ];
* // returns [ 1, 4, 12 ]
*
* var ssy = o[ 2 ];
* // returns [ 1, 8, 24 ]
*
* var ssz = o[ 3 ];
* // returns [ 6, -2, 1 ]
*/
declare function loopOrder( shape: ArrayLike<number>, strides: ArrayLike<ArrayLike<number>> ): Array<Array<number>>;


// EXPORTS //

export = loopOrder;
