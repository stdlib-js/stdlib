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
* Interface describing `dnannsumpw`.
*/
interface Routine {
	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = dnannsumpw( x.length, x, 1, out, 1 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	( N: number, x: Float64Array, strideX: number, out: Float64Array, strideOut: number ): Float64Array;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = dnannsumpw( x.length, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 3 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array;
}

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array whose first element is the sum and whose second element is the number of non-NaN elements
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dnannsumpw( x.length, x, 1, out, 1 );
* // returns <Float64Array>[ 1.0, 3 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dnannsumpw( x.length, x, 1, 0, out, 1, 0 );
* // returns <Float64Array>[ 1.0, 3 ]
*/
declare var dnannsumpw: Routine;


// EXPORTS //

export = dnannsumpw;
