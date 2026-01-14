/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/**
* Interface describing `dcusumors`.
*/
interface Routine {
	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* dcusumors( x.length, 0.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	( N: number, sum: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): Float64Array;

	/**
	* Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param sum - initial sum
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* dcusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
	*/
	ndarray( N: number, sum: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): Float64Array;
}

/**
* Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.
*
* @param N - number of indexed elements
* @param sum - initial sum
* @param x - input array
* @param strideX - stride length for `x`
* @param y - output array
* @param strideY - stride length for `y`
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float64Array( x.length );
*
* dcusumors( x.length, 0.0, x, 1, y, 1 );
* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float64Array( x.length );
*
* dcusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 1.0, -1.0, 1.0 ]
*/
declare var dcusumors: Routine;


// EXPORTS //

export = dcusumors;
