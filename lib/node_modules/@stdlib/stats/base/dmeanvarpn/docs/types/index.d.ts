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

// TypeScript Version: 2.0

/**
* Interface describing `dmeanvarpn`.
*/
interface Routine {
	/**
	* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = dmeanvarpn( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	( N: number, correction: number, x: Float64Array, strideX: number, out: Float64Array, strideOut: number ): Float64Array; // tslint:disable-line:max-line-length

	/**
	* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - `x` starting index
	* @param out - output array
	* @param strideOut - `out` stride length
	* @param offsetOut - `out` starting index
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	ndarray( N: number, correction: number, x: Float64Array, strideX: number, offsetX: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array; // tslint:disable-line:max-line-length
}

/**
* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param x - input array
* @param strideX - `x` stride length
* @param out - output array
* @param strideOut - `out` stride length
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvarpn( x.length, 1, x, 1, out, 1 );
* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
*/
declare var dmeanvarpn: Routine;


// EXPORTS //

export = dmeanvarpn;
