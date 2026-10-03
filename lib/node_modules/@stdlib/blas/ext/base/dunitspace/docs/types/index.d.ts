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
* Interface describing `dunitspace`.
*/
interface Routine {
	/**
	* Fills a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dunitspace( x.length, 3.0, x, 1 );
	* // x => <Float64Array>[ 3.0, 4.0, 5.0, 6.0 ]
	*/
	( N: number, start: number, x: Float64Array, strideX: number ): Float64Array;

	/**
	* Fills a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dunitspace.ndarray( x.length, 3.0, x, 1, 0 );
	* // x => <Float64Array>[ 3.0, 4.0, 5.0, 6.0 ]
	*/
	ndarray( N: number, start: number, x: Float64Array, strideX: number, offsetX: number ): Float64Array;
}

/**
* Fills a double-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* @param N - number of indexed elements
* @param start - starting value
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dunitspace( x.length, 3.0, x, 1 );
* // x => <Float64Array>[ 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dunitspace.ndarray( x.length, 3.0, x, 1, 0 );
* // x => <Float64Array>[ 3.0, 4.0, 5.0, 6.0 ]
*/
declare var dunitspace: Routine;


// EXPORTS //

export = dunitspace;
