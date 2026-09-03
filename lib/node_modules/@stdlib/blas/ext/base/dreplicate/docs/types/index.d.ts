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
* Interface describing `dreplicate`.
*/
interface Routine {
	/**
	* Replicates each element in a double-precision floating-point strided array a specified number of times.
	*
	* @param N - number of indexed elements
	* @param k - number of times to replicate each element
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var out = new Float64Array( 6 );
	*
	* dreplicate( x.length, 2, x, 1, out, 1 );
	* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
	*/
	( N: number, k: number, x: Float64Array, strideX: number, out: Float64Array, strideOut: number ): Float64Array;

	/**
	* Replicates each element in a double-precision floating-point strided array a specified number of times using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param k - number of times to replicate each element
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var out = new Float64Array( 6 );
	*
	* dreplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
	* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
	*/
	ndarray( N: number, k: number, x: Float64Array, strideX: number, offsetX: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array;
}

/**
* Replicates each element in a double-precision floating-point strided array a specified number of times.
*
* @param N - number of indexed elements
* @param k - number of times to replicate each element
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 6 );
*
* dreplicate( x.length, 2, x, 1, out, 1 );
* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var out = new Float64Array( 6 );
*
* dreplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*/
declare var dreplicate: Routine;


// EXPORTS //

export = dreplicate;
