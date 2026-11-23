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

import { BooleanArray, Complex128Array } from '@stdlib/types/array';

/**
* Interface describing `zwhere`.
*/
interface Routine {
	/**
	* Takes elements from one of two double-precision complex floating-point strided arrays depending on a condition.
	*
	* @param N - number of indexed elements
	* @param condition - condition array
	* @param strideC - stride length for `condition`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var BooleanArray = require( '@stdlib/array/bool' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var condition = new BooleanArray( [ true, false, true ] );
	* var x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	* var y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
	* // out => <Complex128Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
	*/
	( N: number, condition: BooleanArray, strideC: number, x: Complex128Array, strideX: number, y: Complex128Array, strideY: number, out: Complex128Array, strideOut: number ): Complex128Array;

	/**
	* Takes elements from one of two double-precision complex floating-point strided arrays depending on a condition using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param condition - condition array
	* @param strideC - stride length for `condition`
	* @param offsetC - starting index for `condition`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var BooleanArray = require( '@stdlib/array/bool' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var condition = new BooleanArray( [ true, false, true ] );
	* var x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	* var y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	* // out => <Complex128Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
	*/
	ndarray( N: number, condition: BooleanArray, strideC: number, offsetC: number, x: Complex128Array, strideX: number, offsetX: number, y: Complex128Array, strideY: number, offsetY: number, out: Complex128Array, strideOut: number, offsetOut: number ): Complex128Array;
}

/**
* Takes elements from one of two double-precision complex floating-point strided arrays depending on a condition.
*
* @param N - number of indexed elements
* @param condition - condition array
* @param strideC - stride length for `condition`
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
* var y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => <Complex128Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
* var y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Complex128Array>[ 1.0, -1.0, 5.0, -5.0, 3.0, -3.0 ]
*/
declare var zwhere: Routine;


// EXPORTS //

export = zwhere;
