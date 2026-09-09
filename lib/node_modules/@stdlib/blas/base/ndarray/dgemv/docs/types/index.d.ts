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
* Performs one of the matrix-vector operations `y = alpha*A*x + beta*y` or `y = alpha*A^T*x + beta*y`, where `alpha` and `beta` are scalars, `x` and `y` are one-dimensional ndarrays, and `A` is an `M` by `N` matrix.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a two-dimensional input ndarray corresponding to `A`.
*     -   a one-dimensional input ndarray corresponding to `x`.
*     -   a one-dimensional input/output ndarray corresponding to `y`.
*     -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `beta`.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
*
* var A = new Float64Matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
* var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Vector( [ 4.0, 5.0 ] );
*
* var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
*     'dtype': 'int8'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
* var beta = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* var z = dgemv( [ A, x, y, trans, alpha, beta ] );
* // returns <ndarray>[ 18.0, 37.0 ]
*
* var bool = ( z === y );
* // returns true
*/
declare function dgemv( arrays: [ float64ndarray, float64ndarray, float64ndarray, ndarray, float64ndarray, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dgemv;
