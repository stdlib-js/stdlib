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
* Interface describing `dlogspace`.
*/
interface Routine {
	/**
	* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval.
	*
	* @param N - number of indexed elements
	* @param base - base of the logarithmic scale
	* @param start - exponent of the starting value
	* @param stop - exponent of the final value
	* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dlogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
	* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
	*/
	( N: number, base: number, start: number, stop: number, endpoint: boolean, x: Float64Array, strideX: number ): Float64Array;

	/**
	* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param base - base of the logarithmic scale
	* @param start - exponent of the starting value
	* @param stop - exponent of the final value
	* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dlogspace.ndarray( x.length, 10.0, 0.0, 5.0, true, x, 1, 0 );
	* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
	*/
	ndarray( N: number, base: number, start: number, stop: number, endpoint: boolean, x: Float64Array, strideX: number, offsetX: number ): Float64Array;
}

/**
* Fills a double-precision floating-point strided array with logarithmically spaced values over a specified interval.
*
* @param N - number of indexed elements
* @param base - base of the logarithmic scale
* @param start - exponent of the starting value
* @param stop - exponent of the final value
* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace( x.length, 10.0, 0.0, 5.0, false, x, 1 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace.ndarray( x.length, 10.0, 0.0, 5.0, true, x, 1, 0 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace.ndarray( x.length, 10.0, 0.0, 5.0, false, x, 1, 0 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*/
declare var dlogspace: Routine;


// EXPORTS //

export = dlogspace;
