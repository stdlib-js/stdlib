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
* Interface describing `cswap`.
*/
interface Routine {
	/**
	* Interchanges two complex single-precision floating-point vectors.
	*
	* @param N - number of values to copy
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var real = require( `@stdlib/complex/real` );
	* var imag = require( `@stdlib/complex/imag` );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* cswap( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*/
	( N: number, x: Complex64Array, strideX: number, y: Complex64Array, strideY: number ): Complex64Array; // tslint:disable-line:max-line-length

	/**
	* Interchanges two complex single-precision floating-point vectors using alternative indexing semantics.
	*
	* @param N - number of values to copy
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var real = require( `@stdlib/complex/real` );
	* var imag = require( `@stdlib/complex/imag` );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number, y: Complex64Array, strideY: number, offsetY: number ): Complex64Array; // tslint:disable-line:max-line-length
}

/**
* Interchanges two complex single-precision floating-point vectors.
*
* @param N - number of values to copy
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* cswap( x.length, x, 1, y, 1 );
*
* var z = y.get( 0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex64>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
*
* var z = y.get( 0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex64>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*/
declare var cswap: Routine;


// EXPORTS //

export = cswap;
