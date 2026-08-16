/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Interface describing `dladiv`.
*/
interface Routine {
	/**
	* Divides two double-precision complex floating-point numbers in real arithmetic.
	*
	* @param a - real component of numerator
	* @param b - imaginary component of numerator
	* @param c - real component of denominator
	* @param d - imaginary component of denominator
	* @param P - array containing a single element which is overwritten by the real part of the quotient
	* @param Q - array containing a single element which is overwritten by the imaginary part of the quotient
	* @returns void
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var P = new Float64Array( 1 );
	* var Q = new Float64Array( 1 );
	*
	* dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
	* // P => <Float64Array>[ 5.0 ]
	* // Q => <Float64Array>[ 3.0 ]
	*/
	( a: number, b: number, c: number, d: number, P: Float64Array, Q: Float64Array ): void;

	/**
	* Divides two double-precision complex floating-point numbers in real arithmetic with alternative indexing semantics.
	*
	* @param a - real component of numerator
	* @param b - imaginary component of numerator
	* @param c - real component of denominator
	* @param d - imaginary component of denominator
	* @param P - array containing an element which is overwritten by the real part of the quotient
	* @param offsetP - index of the element in `P`
	* @param Q - array containing an element which is overwritten by the imaginary part of the quotient
	* @param offsetQ - index of the element in `Q`
	* @returns void
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var P = new Float64Array( 1 );
	* var Q = new Float64Array( 1 );
	*
	* dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
	* // P => <Float64Array>[ 5.0 ]
	* // Q => <Float64Array>[ 3.0 ]
	*/
	ndarray( a: number, b: number, c: number, d: number, P: Float64Array, offsetP: number, Q: Float64Array, offsetQ: number ): void;
}

/**
* Divides two double-precision complex floating-point numbers in real arithmetic.
*
* @param a - real component of numerator
* @param b - imaginary component of numerator
* @param c - real component of denominator
* @param d - imaginary component of denominator
* @param P - array containing a single element which is overwritten by the real part of the quotient
* @param Q - array containing a single element which is overwritten by the imaginary part of the quotient
* @returns void
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var P = new Float64Array( 1 );
* var Q = new Float64Array( 1 );
*
* dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
* // P => <Float64Array>[ 5.0 ]
* // Q => <Float64Array>[ 3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var P = new Float64Array( 1 );
* var Q = new Float64Array( 1 );
*
* dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
* // P => <Float64Array>[ 5.0 ]
* // Q => <Float64Array>[ 3.0 ]
*/
declare var dladiv: Routine;


// EXPORTS //

export = dladiv;
