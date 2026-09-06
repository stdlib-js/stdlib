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
* Performs the symmetric rank 1 operation `A = alpha*x*x^T + A`, where `alpha` is a scalar, `x` is a one-dimensional ndarray, and `A` is a symmetric `N` by `N` matrix supplied in packed form.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray corresponding to `x`.
*     -   a one-dimensional input/output ndarray corresponding to the packed form of `A`.
*     -   a zero-dimensional ndarray specifying whether the upper or lower triangular part of `A` is supplied.
*     -   a zero-dimensional ndarray containing a scalar constant corresponding to `alpha`.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );
* var AP = new Float64Vector( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int8'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* var y = dspr( [ x, AP, uplo, alpha ] );
* // returns <ndarray>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*
* var bool = ( y === AP );
* // returns true
*/
declare function dspr( arrays: [ float64ndarray, float64ndarray, ndarray, float64ndarray ] ): float64ndarray;


// EXPORTS //

export = dspr;
