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
* Performs the matrix-matrix operation `C = alpha*op(A)*op(B) + beta*C`, where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `alpha` and `beta` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a two-dimensional input ndarray corresponding to `A`.
*     -   a two-dimensional input ndarray corresponding to `B`.
*     -   a two-dimensional input/output ndarray corresponding to `C`.
*     -   a zero-dimensional ndarray specifying whether `A` should be transposed, conjugate-transposed, or not transposed.
*     -   a zero-dimensional ndarray specifying whether `B` should be transposed, conjugate-transposed, or not transposed.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `beta`.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
*
* var A = new Float64Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* var B = new Float64Matrix( [ [ 1.0, 1.0 ], [ 0.0, 1.0 ] ] );
* var C = new Float64Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
*
* var transA = scalar2ndarray( resolveEnum( 'no-transpose' ), {
*     'dtype': 'int32'
* });
* var transB = scalar2ndarray( resolveEnum( 'no-transpose' ), {
*     'dtype': 'int32'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
* var beta = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* var z = dgemm( [ A, B, C, transA, transB, alpha, beta ] );
* // returns <ndarray>[ [ 2.0, 5.0 ], [ 6.0, 11.0 ] ]
*
* var bool = ( z === C );
* // returns true
*/
declare function dgemm( arrays: [ float64ndarray, float64ndarray, float64ndarray, ndarray, ndarray, float64ndarray, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dgemm;
