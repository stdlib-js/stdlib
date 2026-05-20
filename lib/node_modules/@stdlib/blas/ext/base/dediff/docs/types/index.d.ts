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

/**
* Interface describing `dediff`.
*/
interface Routine {
	/**
	* Calculates the differences between consecutive elements of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param N1 - number of indexed elements to prepend
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param N2 - number of indexed elements to append
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
	* var p = new Float64Array( [ 1.0 ] );
	* var a = new Float64Array( [ 22.0 ] );
	* var out = new Float64Array( 6 );
	*
	* dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
	* // out => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
	*/
	( N: number, x: Float64Array, strideX: number, N1: number, prepend: Float64Array, strideP: number, N2: number, append: Float64Array, strideA: number, out: Float64Array, strideOut: number ): Float64Array;

	/**
	* Calculates the differences between consecutive elements of a double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param N1 - number of indexed elements to prepend
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param offsetP - starting index for `prepend`
	* @param N2 - number of indexed elements to append
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param offsetA - starting index for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
	* var p = new Float64Array( [ 1.0 ] );
	* var a = new Float64Array( [ 22.0 ] );
	* var out = new Float64Array( 6 );
	*
	* dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
	* // out => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
	*/
	ndarray	( N: number, x: Float64Array, strideX: number, offsetX: number, N1: number, prepend: Float64Array, strideP: number, offsetP: number, N2: number, append: Float64Array, strideA: number, offsetA: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array;
}

/**
* Calculates the differences between consecutive elements of a double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param N1 - number of indexed elements to prepend
* @param prepend - prepend array
* @param strideP - stride length for `prepend`
* @param N2 - number of indexed elements to append
* @param append - append array
* @param strideA - stride length for `append`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float64Array( [ 1.0 ] );
* var a = new Float64Array( [ 22.0 ] );
* var out = new Float64Array( 6 );
*
* dediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
* // out => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float64Array( [ 1.0 ] );
* var a = new Float64Array( [ 22.0 ] );
* var out = new Float64Array( 6 );
*
* dediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*/
declare var dediff: Routine;


// EXPORTS //

export = dediff;
