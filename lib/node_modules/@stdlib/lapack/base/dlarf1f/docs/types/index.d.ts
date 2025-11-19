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

import { Layout, OperationSide } from '@stdlib/types/blas';

/**
* Interface describing `dlarf1f`.
*/
interface Routine {
	/**
	* Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.
	*
	* ## Notes
	*
	* -   If `side = 'left'`,
	*
	*     -   `work` should have `N` indexed elements.
	*     -   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
	*     -   `C` is overwritten by `H * C`.
	*
	* -   If `side = 'right'`,
	*
	*     -   `work` should have `M` indexed elements.
	*     -   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
	*     -   `C` is overwritten by `C * H`.
	*
	* @param order - storage layout
	* @param side - specifies the side of multiplication with `C`.
	* @param M - number of rows in `C`
	* @param N - number of columns in `C`
	* @param V - the vector `v`
	* @param strideV - stride length for `V`
	* @param tau - scalar constant
	* @param C - input matrix
	* @param ldc - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
	* @param work - workspace array
	* @returns `C * H` or `H * C`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	* var work = new Float64Array( 3 );
	*
	* dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work );
	* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
	*/
	( order: Layout, side: OperationSide, M: number, N: number, V: Float64Array, strideV: number, tau: number, C: Float64Array, ldc: number, work: Float64Array ): Float64Array;

	/**
	* Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C` using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If `side = 'left'`,
	*
	*     -   `work` should have `N` indexed elements.
	*     -   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
	*     -   `C` is overwritten by `H * C`.
	*
	* -   If `side = 'right'`,
	*
	*     -   `work` should have `M` indexed elements.
	*     -   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
	*     -   `C` is overwritten by `C * H`.
	*
	* @param side - specifies the side of multiplication with `C`
	* @param M - number of rows in `C`
	* @param N - number of columns in `C`
	* @param V - the vector `v`
	* @param strideV - stride length for `V`
	* @param offsetV - starting index for `V`
	* @param tau - scalar constant
	* @param C - input matrix
	* @param strideC1 - stride of the first dimension of `C`
	* @param strideC2 - stride of the second dimension of `C`
	* @param offsetC - starting index for `C`
	* @param work - workspace array
	* @param strideWork - stride length for `work`
	* @param offsetWork - starting index for `work`
	* @returns `C * H` or `H * C`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
	* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
	* var work = new Float64Array( 3 );
	*
	* dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
	* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
	*/
	ndarray( side: OperationSide, M: number, N: number, V: Float64Array, strideV: number, offsetV: number, tau: number, C: Float64Array, strideC1: number, strideC2: number, offsetC: number, work: Float64Array, strideWork: number, offsetWork: number ): Float64Array;
}

/**
* Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.
*
* ## Notes
*
* -   If `side = 'left'`,
*
*     -   `work` should have `N` indexed elements.
*     -   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `H * C`.
*
* -   If `side = 'right'`,
*
*     -   `work` should have `M` indexed elements.
*     -   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `C * H`.
*
* @param order - storage layout
* @param side - specifies the side of multiplication with `C`
* @param M - number of rows in `C`
* @param N - number of columns in `C`
* @param V - the vector `v`
* @param strideV - stride length for `V`
* @param tau - scalar constant
* @param C - input matrix
* @param ldc - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
* @param work - workspace array
* @returns `C * H` or `H * C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
* var work = new Float64Array( 3 );
*
* dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work );
* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
* var work = new Float64Array( 3 );
*
* dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
*/
declare var dlarf1f: Routine;


// EXPORTS //

export = dlarf1f;
