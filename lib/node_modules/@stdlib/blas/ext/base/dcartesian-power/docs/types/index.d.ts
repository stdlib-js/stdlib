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

import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `dcartesianPower`.
*/
interface Routine {
	/**
	* Computes the Cartesian power for a double-precision floating-point strided array.
	*
	* ## Notes
	*
	* -   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
	*
	* @param order - storage layout
	* @param N - number of indexed elements
	* @param k - power
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0 ] );
	* var out = new Float64Array( 8 );
	*
	* dcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
	* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	( order: Layout, N: number, k: number, x: Float64Array, strideX: number, out: Float64Array, LDO: number ): Float64Array;

	/**
	* Computes the Cartesian power for a double-precision floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   `k`-tuples are stored as rows in the output matrix, where the `j`-th column contains the `j`-th element of each tuple.
	*
	* @param N - number of indexed elements
	* @param k - power
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
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, 2.0 ] );
	* var out = new Float64Array( 8 );
	*
	* dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
	* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
	*/
	ndarray( N: number, k: number, x: Float64Array, strideX: number, offsetX: number, out: Float64Array, strideOut1: number, strideOut2: number, offsetOut: number ): Float64Array;
}

/**
* Computes the Cartesian power for a double-precision floating-point strided array.
*
* @param order - storage layout
* @param N - number of indexed elements
* @param k - power
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param LDO - stride length between successive contiguous vectors of the matrix `out` (a.k.a., leading dimension of `out`)
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
declare var dcartesianPower: Routine;


// EXPORTS //

export = dcartesianPower;
