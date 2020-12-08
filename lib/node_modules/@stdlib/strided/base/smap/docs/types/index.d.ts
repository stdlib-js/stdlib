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
* Interface describing `smap`.
*/
interface Routine {
	/**
	* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assigns each result to an element in a single-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* smap( x.length, x, 1, y, 1, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	( N: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number, fcn: Unary ): Float32Array; // tslint:disable-line:max-line-length

	/**
	* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assigns each result to an element in a single-precision floating-point strided output array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* smap.ndarray( x.length, x, 1, 0, y, 1, 0, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number, fcn: Unary ): Float32Array; // tslint:disable-line:max-line-length
}

/**
* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assigns each result to an element in a single-precision floating-point strided output array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @param fcn - unary function to apply
* @returns `y`
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* function identity( x ) {
*     return x;
* }
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smap( x.length, x, 1, y, 1, identity );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* function identity( x ) {
*     return x;
* }
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smap.ndarray( x.length, x, 1, 0, y, 1, 0, identity );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare var smap: Routine;


// EXPORTS //

export = smap;
