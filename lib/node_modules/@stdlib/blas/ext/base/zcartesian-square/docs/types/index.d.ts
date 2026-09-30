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
import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `zcartesianSquare`.
*/
interface Routine {
	/**
	* Computes the Cartesian square for a double-precision complex floating-point strided array.
	*
	* ## Notes
	*
	* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
	*
	* @param order - storage layout
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Complex128Array( 8 );
	*
	* zcartesianSquare( 'row-major', x.length, x, 1, out, 2 );
	* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
	*/
	( order: Layout, N: number, x: Complex128Array, strideX: number, out: Complex128Array, LDO: number ): Complex128Array;

	/**
	* Computes the Cartesian square for a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut1 - stride length for the first dimension of `out`
	* @param strideOut2 - stride length for the second dimension of `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Complex128Array( 8 );
	*
	* zcartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0 );
	* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number, out: Complex128Array, strideOut1: number, strideOut2: number, offsetOut: number ): Complex128Array;
}

/**
* Computes the Cartesian square for a double-precision complex floating-point strided array.
*
* @param order - storage layout
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Complex128Array( 8 );
*
* zcartesianSquare( 'row-major', x.length, x, 1, out, 2 );
* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Complex128Array( 8 );
*
* zcartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0 );
* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
*/
declare var zcartesianSquare: Routine;


// EXPORTS //

export = zcartesianSquare;
