/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Interface describing loop interchange data.
*/
interface LoopOrderObject {
	/**
	* Dimensions sorted in loop order.
	*/
	sh: Array<number>;

	/**
	* Array strides sorted in loop order.
	*/
	sx: Array<number>;

	/**
	* Dimension indices sorted in loop order.
	*/
	idx: Array<number>;
}

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **sh**: dimensions sorted in loop order.
*     -   **sx**: ndarray strides sorted in loop order.
*     -   **idx**: dimension indices sorted in loop order.
*
* -   When iterating over the elements of a multi-dimensional array, accessing elements which are closer in memory can improve performance. To this end, loop interchange is a technique used in loop nest optimization to improve locality of reference and take advantage of CPU cache.
*
*     The purpose of this function is to order ndarray dimensions according to the magnitude of array strides. By using the ordered dimensions and associated strides, one can construct nested loops (one for each dimension) such that the innermost loop iterates over the dimension in which array elements are closest in memory and the outermost loop iterates over the dimension in which array elements are farthest apart in memory. As a consequence, element iteration is optimized to minimize cache misses and ensure locality of reference.
*
* @param sh - array dimensions
* @param sx - array stride lengths
* @returns loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
*
* var o = nullaryLoopOrder( sh, sx );
* // returns {...}
*
* var ssh = o.sh;
* // returns [ 4, 3, 2 ]
*
* var ssx = o.sx;
* // returns [ 1, 4, 12 ]
*
* var idx = o.idx;
* // returns [ 2, 1, 0 ]
*/
declare function nullaryLoopOrder( shape: ArrayLike<number>, stridesX: ArrayLike<number> ): LoopOrderObject;


// EXPORTS //

export = nullaryLoopOrder;
