/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
	* First input array strides sorted in loop order.
	*/
	sx: Array<number>;

	/**
	* Second input array strides sorted in loop order.
	*/
	sy: Array<number>;

	/**
	* Third input array strides sorted in loop order.
	*/
	sz: Array<number>;

	/**
	* Fourth input array strides sorted in loop order.
	*/
	sw: Array<number>;

	/**
	* Fifth input array strides sorted in loop order.
	*/
	su: Array<number>;

	/**
	* Output array strides sorted in loop order.
	*/
	sv: Array<number>;
}

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **sh**: dimensions sorted in loop order.
*     -   **sx**: first input ndarray strides sorted in loop order.
*     -   **sy**: second input ndarray strides sorted in loop order.
*     -   **sz**: third input ndarray strides sorted in loop order.
*     -   **sw**: fourth input ndarray strides sorted in loop order.
*     -   **su**: fifth input ndarray strides sorted in loop order.
*     -   **sv**: output ndarray strides sorted in loop order.
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
* @param stridesX - first input array stride lengths
* @param stridesY - second input array stride lengths
* @param stridesZ - third input array stride lengths
* @param stridesW - fourth input array stride lengths
* @param stridesU - fifth input array stride lengths
* @param stridesV - output array stride lengths
* @returns loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
* var sy = [ 24, 8, 1 ]; // row-major
* var sz = [ 12, 4, 1 ]; // row-major
* var sw = [ 24, 8, 1 ]; // row-major
* var su = [ 1, 4, 12 ]; // column-major
* var sv = [ 1, -2, 6 ]; // column-major
*
* var o = quinaryLoopOrder( sh, sx, sy, sz, sw, su, sv );
* // returns {...}
*
* var ssh = o.sh;
* // returns [ 4, 3, 2 ]
*
* var ssx = o.sx;
* // returns [ 1, 4, 12 ]
*
* var ssy = o.sy;
* // returns [ 1, 8, 24 ]
*
* var ssz = o.sz;
* // returns [ 1, 4, 12 ]
*
* var ssw = o.sw;
* // returns [ 1, 8, 24 ]
*
* var ssu = o.su;
* // returns [ 12, 4, 1 ]
*
* var ssv = o.sv;
* // returns [ 6, -2, 1 ]
*/
declare function quinaryLoopOrder( shape: ArrayLike<number>, stridesX: ArrayLike<number>, stridesY: ArrayLike<number>, stridesZ: ArrayLike<number>, stridesW: ArrayLike<number>, stridesU: ArrayLike<number>, stridesV: ArrayLike<number> ): LoopOrderObject;


// EXPORTS //

export = quinaryLoopOrder;
