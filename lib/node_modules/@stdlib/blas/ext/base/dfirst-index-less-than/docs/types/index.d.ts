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

/**
* Interface describing `dfirstIndexLessThan`.
*/
interface Routine {
	/**
	* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array.
	*
	* ## Notes
	*
	* -   If the function is unable to find an element in `x` which is less than a corresponding element in `y`, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
	*
	* var idx = dfirstIndexLessThan( x.length, x, 1, y, 1 );
	* // returns 2
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): number;

	/**
	* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is unable to find an element in `x` which is less than a corresponding element in `y`, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
	*
	* var idx = dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns 2
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): number;
}

/**
* Returns the index of the first element in a double-precision floating-point strided array which is less than a corresponding element in another double-precision floating-point strided array.
*
* ## Notes
*
* -   If the function is unable to find an element in `x` which is less than a corresponding element in `y`, the function returns `-1`.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @returns index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = dfirstIndexLessThan( x.length, x, 1, y, 1 );
* // returns 2
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var idx = dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 2
*/
declare var dfirstIndexLessThan: Routine;


// EXPORTS //

export = dfirstIndexLessThan;
