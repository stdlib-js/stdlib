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
* Interface describing `daxpy`.
*/
interface Routine {
	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* daxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	( N: number, alpha: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): Float64Array; // tslint:disable-line:max-line-length

	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	ndarray( N: number, alpha: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): Float64Array; // tslint:disable-line:max-line-length
}

/**
* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* daxpy( x.length, 5.0, x, 1, y, 1 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
declare var daxpy: Routine;


// EXPORTS //

export = daxpy;
