/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Interface describing `dlassq`.
*/
interface Routine {
	/**
	* Returns an updated sum of squares represented in scaled form.
	*
	* @param N - number of indexed elements
	* @param X - input array
	* @param strideX - stride length for `X`
	* @param scale - scaling factor
	* @param sumsq - basic sum of squares from which output is factored out
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = dlassq( 4, X, 1, 1.0, 0.0 );
	* // returns <Float64Array>[ 1.0, 30.0 ]
	*/
	( N: number, X: Float64Array, strideX: number, scale: number, sumsq: number ): Float64Array;

	/**
	* Returns an updated sum of squares represented in scaled form using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param X - input array
	* @param strideX - stride length for `X`
	* @param offsetX - starting index for `X`
	* @param scale - scaling factor
	* @param sumsq - basic sum of squares from which output is factored out
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0 ] );
	*
	* dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
	* // out => <Float64Array>[ 1.0, 30.0 ]
	*/
	ndarray( N: number, X: Float64Array, strideX: number, offsetX: number, scale: number, sumsq: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array;
}

/**
* Returns an updated sum of squares represented in scaled form.
*
* @param N - number of indexed elements
* @param X - input array
* @param strideX - stride length for `X`
* @param scale - scaling factor
* @param sumsq - basic sum of squares from which output is factored out
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = dlassq( 4, X, 1, 1.0, 0.0, out );
* // returns <Float64Array>[ 1.0, 30.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( [ 0.0, 0.0 ] );
*
* dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 30.0 ]
*/
declare var dlassq: Routine;


// EXPORTS //

export = dlassq;
