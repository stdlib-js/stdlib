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
* Callback invoked for each indexed strided array element.
*
* @param value - strided array element
* @returns result
*/
type Unary = ( value: number ) => number;

/**
* Interface describing `dmskmap`.
*/
interface Routine {
	/**
	* Applies a unary function accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a double-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dmskmap( x.length, x, 1, m, 1, y, 1, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*/
	( N: number, x: Float64Array, strideX: number, mask: Uint8Array, strideMask: number, y: Float64Array, strideY: number, fcn: Unary ): Float64Array; // tslint:disable-line:max-line-length

	/**
	* Applies a unary function accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a double-precision floating-point strided output array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param offsetMask - staring index for `mask`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dmskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, mask: Uint8Array, strideMask: number, offsetMask: number, y: Float64Array, strideY: number, offsetY: number, fcn: Unary ): Float64Array; // tslint:disable-line:max-line-length
}

/**
* Applies a unary function accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a double-precision floating-point strided output array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @param fcn - unary function to apply
* @returns `y`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* function identity( x ) {
*     return x;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dmskmap( x.length, x, 1, m, 1, y, 1, identity );
* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* function identity( x ) {
*     return x;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dmskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, identity );
* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
*/
declare var dmskmap: Routine;


// EXPORTS //

export = dmskmap;
