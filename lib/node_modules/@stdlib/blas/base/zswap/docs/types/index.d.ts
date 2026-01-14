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

/// <reference types="@stdlib/types"/>

import { Complex128Array } from '@stdlib/types/array';

/**
* Interface describing `zswap`.
*/
interface Routine {
	/**
	* Interchanges two complex double-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zswap( x.length, x, 1, y, 1 );
	* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	( N: number, x: Complex128Array, strideX: number, y: Complex128Array, strideY: number ): Complex128Array;

	/**
	* Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number, y: Complex128Array, strideY: number, offsetY: number ): Complex128Array;
}

/**
* Interchanges two complex double-precision floating-point vectors.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zswap( x.length, x, 1, y, 1 );
* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
declare var zswap: Routine;


// EXPORTS //

export = zswap;
