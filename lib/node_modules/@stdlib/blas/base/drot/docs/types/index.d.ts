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

/**
* Interface describing `drot`.
*/
interface Routine {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* drot( x.length, x, 1, y, 1, 0.8, 0.6 );
	* // x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
	* // y => <Float64Array>[ ~4.2, 4.4, 4.6, 4.8, 5.0 ]
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, c: number, s: number ): Float64Array;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* drot.ndarray( 3, x, 2, 1, y, 2, 1, 0.8, 0.6 );
	* // x => <Float64Array>[ 1.0, 6.4, 3.0, 9.2, 5.0, 12.0 ]
	* // y => <Float64Array>[ 7.0, 5.2, 9.0, 5.6, 11.0, ~6.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, c: number, s: number ): Float64Array;
}

/**
* Applies a plane rotation.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* drot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
* // y => <Float64Array>[ ~4.2, 4.4, ~4.6, ~4.8, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* drot.ndarray( 3, x, 2, 1, y, 2, 1, 0.8, 0.6 );
* // x => <Float64Array>[ 1.0, 6.4, 3.0, 9.2, 5.0, 12.0 ]
* // y => <Float64Array>[ 7.0, 5.2, 9.0, 5.6, 11.0, ~6.0 ]
*/
declare var drot: Routine;


// EXPORTS //

export = drot;
