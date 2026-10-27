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

import { BooleanArray } from '@stdlib/types/array';

/**
* Interface describing `dwhere`.
*/
interface Routine {
	/**
	* Takes elements from one of two double-precision floating-point strided arrays depending on a condition.
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
	*
	* var condition = new BooleanArray( [ true, false, true ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	*
	* dwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
	* // out => <Float64Array>[ 1.0, 5.0, 3.0 ]
	*/
	( N: number, condition: BooleanArray, strideC: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, out: Float64Array, strideOut: number ): Float64Array;

	/**
	* Takes elements from one of two double-precision floating-point strided arrays depending on a condition using alternative indexing semantics.
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
	*
	* var condition = new BooleanArray( [ true, false, true ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	*
	* dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	* // out => <Float64Array>[ 1.0, 5.0, 3.0 ]
	*/
	ndarray( N: number, condition: BooleanArray, strideC: number, offsetC: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, out: Float64Array, strideOut: number, offsetOut: number ): Float64Array;
}

/**
* Takes elements from one of two double-precision floating-point strided arrays depending on a condition.
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
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );
*
* dwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => <Float64Array>[ 1.0, 5.0, 3.0 ]
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var condition = new BooleanArray( [ true, false, true ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );
*
* dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 5.0, 3.0 ]
*/
declare var dwhere: Routine;


// EXPORTS //

export = dwhere;
