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

/// <reference types="@stdlib/types"/>

import { Complex128Array } from '@stdlib/types/array';

/**
* Interface describing `zdiff`.
*/
interface Routine {
	/**
	* Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array.
	*
	* ## Notes
	*
	* -   The `out` array must have `N + N1 + N2 - k` elements.
	* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
	*
	* @param N - number of indexed elements
	* @param k - number of times to recursively compute differences
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param N1 - number of indexed elements for `prepend`
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param N2 - number of indexed elements for `append`
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
	* var p = new Complex128Array( [ 1.0, -1.0 ] );
	* var a = new Complex128Array( [ 11.0, -11.0 ] );
	* var out = new Complex128Array( 6 );
	* var w = new Complex128Array( 6 );
	*
	* zdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
	* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
	*/
	( N: number, k: number, x: Complex128Array, strideX: number, N1: number, prepend: Complex128Array, strideP: number, N2: number, append: Complex128Array, strideA: number, out: Complex128Array, strideOut: number, workspace: Complex128Array, strideW: number ): Complex128Array;

	/**
	* Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The `out` array must have `N + N1 + N2 - k` elements.
	* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
	*
	* @param N - number of indexed elements
	* @param k - number of times to recursively compute differences
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param N1 - number of indexed elements for `prepend`
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param offsetP - starting index for `prepend`
	* @param N2 - number of indexed elements for `append`
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param offsetA - starting index for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @param offsetW - starting index for `workspace`
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
	* var p = new Complex128Array( [ 1.0, -1.0 ] );
	* var a = new Complex128Array( [ 11.0, -11.0 ] );
	* var out = new Complex128Array( 6 );
	* var w = new Complex128Array( 6 );
	*
	* zdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
	* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
	*/
	ndarray( N: number, k: number, x: Complex128Array, strideX: number, offsetX: number, N1: number, prepend: Complex128Array, strideP: number, offsetP: number, N2: number, append: Complex128Array, strideA: number, offsetA: number, out: Complex128Array, strideOut: number, offsetOut: number, workspace: Complex128Array, strideW: number, offsetW: number ): Complex128Array;
}

/**
* Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array.
*
* ## Notes
*
* -   The `out` array must have `N + N1 + N2 - k` elements.
* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
*
* @param N - number of indexed elements
* @param k - number of times to recursively compute differences
* @param x - input array
* @param strideX - stride length for `x`
* @param N1 - number of indexed elements for `prepend`
* @param prepend - prepend array
* @param strideP - stride length for `prepend`
* @param N2 - number of indexed elements for `append`
* @param append - append array
* @param strideA - stride length for `append`
* @param out - output array
* @param strideOut - stride length for `out`
* @param workspace - workspace array
* @param strideW - stride length for `workspace`
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
* var p = new Complex128Array( [ 1.0, -1.0 ] );
* var a = new Complex128Array( [ 11.0, -11.0 ] );
* var out = new Complex128Array( 6 );
* var w = new Complex128Array( 6 );
*
* zdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
* var p = new Complex128Array( [ 1.0, -1.0 ] );
* var a = new Complex128Array( [ 11.0, -11.0 ] );
* var out = new Complex128Array( 6 );
* var w = new Complex128Array( 6 );
*
* zdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*/
declare var zdiff: Routine;


// EXPORTS //

export = zdiff;
