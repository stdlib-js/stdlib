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
* Interface describing `dmskmin`.
*/
interface Routine {
	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = dmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*/
	( N: number, x: Float64Array, strideX: number, mask: Uint8Array, strideMask: number ): number; // tslint:disable-line:max-line-length

	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask and using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - `x` starting index
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param offsetMask - `mask` starting index
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = dmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, mask: Uint8Array, strideMask: number, offsetMask: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the minimum value of a double-precision floating-point strided array according to a mask.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param mask - mask array
* @param strideMask - `mask` stride length
* @returns minimum value
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
*
* var v = dmskmin( x.length, x, 1, mask, 1 );
* // returns -2.0
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
*
* var v = dmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
* // returns -2.0
*/
declare var dmskmin: Routine;


// EXPORTS //

export = dmskmin;
