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
* Interface describing `zcopyWithin`.
*/
interface Routine {
	/**
	* Performs an in-place copy of elements within a double-precision complex floating-point strided array.
	*
	* ## Notes
	*
	* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
	*
	* @param N - number of indexed elements
	* @param target - target index
	* @param start - source start index (inclusive)
	* @param end - source end index (exclusive)
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @returns `x`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var w = new Complex128Array( x.length );
	*
	* zcopyWithin( x.length, 2, 0, 2, x, 1, w, 1 );
	* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	( N: number, target: number, start: number, end: number, x: Complex128Array, strideX: number, workspace: Complex128Array, strideW: number ): Complex128Array;

	/**
	* Performs an in-place copy of elements within a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
	*
	* @param N - number of indexed elements
	* @param target - target index
	* @param start - source start index (inclusive)
	* @param end - source end index (exclusive)
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @param offsetW - starting index for `workspace`
	* @returns `x`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var w = new Complex128Array( x.length );
	*
	* zcopyWithin.ndarray( x.length, 2, 0, 2, x, 1, 0, w, 1, 0 );
	* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	ndarray( N: number, target: number, start: number, end: number, x: Complex128Array, strideX: number, offsetX: number, workspace: Complex128Array, strideW: number, offsetW: number ): Complex128Array;
}

/**
* Performs an in-place copy of elements within a double-precision complex floating-point strided array.
*
* ## Notes
*
* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
*
* @param N - number of indexed elements
* @param target - target index
* @param start - source start index (inclusive)
* @param end - source end index (exclusive)
* @param x - input array
* @param strideX - stride length for `x`
* @param workspace - workspace array
* @param strideW - stride length for `workspace`
* @returns `x`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var w = new Complex128Array( x.length );
*
* zcopyWithin( x.length, 3, 1, 4, x, 1, w, 1 );
* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var w = new Complex128Array( x.length );
*
* zcopyWithin.ndarray( x.length, 3, 1, 4, x, 1, 0, w, 1, 0 );
* // x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ]
*/
declare var zcopyWithin: Routine;


// EXPORTS //

export = zcopyWithin;
