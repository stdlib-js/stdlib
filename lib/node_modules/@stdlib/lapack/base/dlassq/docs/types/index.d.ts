/*
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
	* @param scale - array containing a single element which specifies the scaling factor and is overwritten by the updated scaling factor
	* @param sumsq - array containing a single element which specifies the basic sum of squares from which output is factored out and is overwritten by the updated sum of squares
	* @returns void
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var scale = new Float64Array( [ 1.0 ] );
	* var sumsq = new Float64Array( [ 0.0 ] );
	*
	* dlassq( 4, X, 1, scale, sumsq );
	* // scale => <Float64Array>[ 1.0 ]
	* // sumsq => <Float64Array>[ 30.0 ]
	*/
	( N: number, X: Float64Array, strideX: number, scale: Float64Array, sumsq: Float64Array ): void;

	/**
	* Returns an updated sum of squares represented in scaled form using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param X - input array
	* @param strideX - stride length for `X`
	* @param offsetX - starting index for `X`
	* @param scale - array containing an element which specifies the scaling factor and is overwritten by the updated scaling factor
	* @param offsetScale - index of the element in `scale`
	* @param sumsq - array containing an element which specifies the basic sum of squares from which output is factored out and is overwritten by the updated sum of squares
	* @param offsetSumsq - index of the element in `sumsq`
	* @returns void
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var scale = new Float64Array( [ 1.0 ] );
	* var sumsq = new Float64Array( [ 0.0 ] );
	*
	* dlassq.ndarray( 4, X, 1, 0, scale, 0, sumsq, 0 );
	* // scale => <Float64Array>[ 1.0 ]
	* // sumsq => <Float64Array>[ 30.0 ]
	*/
	ndarray( N: number, X: Float64Array, strideX: number, offsetX: number, scale: Float64Array, offsetScale: number, sumsq: Float64Array, offsetSumsq: number ): void;
}

/**
* Returns an updated sum of squares represented in scaled form.
*
* @param N - number of indexed elements
* @param X - input array
* @param strideX - stride length for `X`
* @param scale - array containing a single element which specifies the scaling factor and is overwritten by the updated scaling factor
* @param sumsq - array containing a single element which specifies the basic sum of squares from which output is factored out and is overwritten by the updated sum of squares
* @returns void
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var scale = new Float64Array( [ 1.0 ] );
* var sumsq = new Float64Array( [ 0.0 ] );
*
* dlassq( 4, X, 1, scale, sumsq );
* // scale => <Float64Array>[ 1.0 ]
* // sumsq => <Float64Array>[ 30.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var scale = new Float64Array( [ 1.0 ] );
* var sumsq = new Float64Array( [ 0.0 ] );
*
* dlassq.ndarray( 4, X, 1, 0, scale, 0, sumsq, 0 );
* // scale => <Float64Array>[ 1.0 ]
* // sumsq => <Float64Array>[ 30.0 ]
*/
declare var dlassq: Routine;


// EXPORTS //

export = dlassq;
