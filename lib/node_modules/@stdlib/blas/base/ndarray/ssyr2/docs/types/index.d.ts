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

import { float32ndarray, ndarray } from '@stdlib/types/ndarray';

/**
* Performs the symmetric rank 2 operation `A = alpha*x*y^T + alpha*y*x^T + A`, where `alpha` is a scalar, `x` and `y` are one-dimensional ndarrays, and `A` is an `N` by `N` symmetric matrix.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray corresponding to `x`.
*     -   a one-dimensional input ndarray corresponding to `y`.
*     -   a two-dimensional input/output ndarray corresponding to `A`.
*     -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ] );
* var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Vector( [ 2.0, 1.0, 3.0 ] );
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int32'
* });
* var alpha = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var z = ssyr2( [ x, y, A, uplo, alpha ] );
* // returns <ndarray>[ [ 9.0, 12.0, 21.0 ], [ 2.0, 9.0, 20.0 ], [ 3.0, 2.0, 37.0 ] ]
*
* var bool = ( z === A );
* // returns true
*/
declare function ssyr2( arrays: [ float32ndarray, float32ndarray, float32ndarray, ndarray, float32ndarray ] ): float32ndarray;


// EXPORTS //

export = ssyr2;
