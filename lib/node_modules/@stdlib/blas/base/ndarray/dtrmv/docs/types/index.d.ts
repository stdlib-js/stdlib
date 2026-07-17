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

import { float64ndarray, ndarray } from '@stdlib/types/ndarray';

/**
* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is a one-dimensional ndarray and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a two-dimensional input ndarray corresponding to `A`.
*     -   a one-dimensional input/output ndarray corresponding to `x`.
*     -   a zero-dimensional ndarray specifying whether `A` is an upper or lower triangular matrix.
*     -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
*     -   a zero-dimensional ndarray specifying whether `A` has a unit or non-unit diagonal.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveTriangle = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var resolveTranspose = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
* var resolveDiagonal = require( '@stdlib/blas/base/diagonal-type-resolve-enum' );
*
* var A = new Float64Matrix( [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ] );
* var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );
*
* var uplo = scalar2ndarray( resolveTriangle( 'upper' ), {
*     'dtype': 'int32'
* });
* var trans = scalar2ndarray( resolveTranspose( 'no-transpose' ), {
*     'dtype': 'int32'
* });
* var diag = scalar2ndarray( resolveDiagonal( 'unit' ), {
*     'dtype': 'int32'
* });
*
* var z = dtrmv( [ A, x, uplo, trans, diag ] );
* // returns <ndarray>[ 14.0, 8.0, 3.0 ]
*
* var bool = ( z === x );
* // returns true
*/
declare function dtrmv( arrays: [ float64ndarray, float64ndarray, ndarray, ndarray, ndarray ] ): float64ndarray;


// EXPORTS //

export = dtrmv;
