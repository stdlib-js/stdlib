/**
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

'use strict';

/**
* BLAS level 2 routine to perform one of the matrix-vector operations `x = A*x` or `x = A^T*x` for a triangular matrix `A`.
*
* @module @stdlib/blas/base/ndarray/dtrmv
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveTriangle = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var resolveTranspose = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
* var resolveDiagonal = require( '@stdlib/blas/base/diagonal-type-resolve-enum' );
* var dtrmv = require( '@stdlib/blas/base/ndarray/dtrmv' );
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
* var out = dtrmv( [ A, x, uplo, trans, diag ] );
* // returns <ndarray>[ 14.0, 8.0, 3.0 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
