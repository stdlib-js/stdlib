/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Complex64 } from '@stdlib/types/complex';
import { Complex64Array } from '@stdlib/types/array';

/**
* Callback invoked for each indexed strided array element.
*
* @param value - strided array element
* @returns result
*/
type Unary = ( value: Complex64 ) => Complex64;

/**
* Interface describing `cmap`.
*/
interface Routine {
	/**
	* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.
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
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var real = require( `@stdlib/complex/real` );
	* var imag = require( `@stdlib/complex/imag` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex64( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex64Array( x.length );
	*
	* cmap( x.length, x, 1, y, 1, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*/
	( N: number, x: Complex64Array, strideX: number, y: Complex64Array, strideY: number, fcn: Unary ): Complex64Array; // tslint:disable-line:max-line-length

	/**
	* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array using alternative indexing semantics.
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
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var real = require( `@stdlib/complex/real` );
	* var imag = require( `@stdlib/complex/imag` );
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex64( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex64Array( x.length );
	*
	* cmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number, y: Complex64Array, strideY: number, offsetY: number, fcn: Unary ): Complex64Array; // tslint:disable-line:max-line-length
}

/**
* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.
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
* var Complex64Array = require( `@stdlib/array/complex64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
* var Complex64 = require( `@stdlib/complex/float32` );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex64( re*10.0, im*10.0 );
* }
*
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex64Array( x.length );
*
* cmap( x.length, x, 1, y, 1, scale );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
* var Complex64 = require( `@stdlib/complex/float32` );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex64( re*10.0, im*10.0 );
* }
*
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex64Array( x.length );
*
* cmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*/
declare var cmap: Routine;


// EXPORTS //

export = cmap;
