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

import { Layout, MatrixTriangle } from '@stdlib/types/blas';

/**
* Interface describing `dspr`.
*/
interface Routine {
	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is being supplied
	* @param N - number of elements along each dimension of `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param AP - packed form of a symmetric matrix `A`
	* @returns `AP`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* dspr( 'row-major', 'upper', 3, 1.0, x, 1, AP );
	* // A => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
	*/
	( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, x: Float64Array, strideX: number, AP: Float64Array ): Float64Array;

	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is being supplied
	* @param N - number of elements along each dimension of `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param AP - packed form of a symmetric matrix `A`
	* @param strideAP - `AP` stride length
	* @param offsetAP - starting index for `AP`
	* @returns `AP`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* dspr.ndarray( 'row-major', 'upper', 3, 1.0, x, 1, 0, AP, 1, 0 );
	* // A => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
	*/
	ndarray( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, x: Float64Array, strideX: number, offsetX: number, AP: Float64Array, strideAP: number, offsetAP: number ): Float64Array;
}

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @param order - storage layout
* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is being supplied
* @param N - number of elements along each dimension of `A`
* @param alpha - scalar constant
* @param x - input vector
* @param strideX - `x` stride length
* @param AP - packed form of a symmetric matrix `A`
* @returns `AP`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var AP = new Float64Array( [ 1.0, 1.0, 2.0, 1.0, 2.0, 3.0 ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dspr( 'row-major', 'lower', 3, 1.0, x, 1, AP );
* // AP => <Float64Array>[ 2.0, 3.0, 6.0, 4.0, 8.0, 12.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var AP = new Float64Array( [ 1.0, 1.0, 2.0, 1.0, 2.0, 3.0 ] );
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dspr.ndarray( 'row-major', 'lower', 3, 1.0, x, 1, 0, AP, 1, 0 );
* // AP => <Float64Array>[ 2.0, 3.0, 6.0, 4.0, 8.0, 12.0 ]
*/
declare var dspr: Routine;


// EXPORTS //

export = dspr;
