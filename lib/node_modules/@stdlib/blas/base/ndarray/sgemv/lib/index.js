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
* BLAS level 2 routine to perform one of the matrix-vector operations `y = alpha*A*x + beta*y` or `y = alpha*A^T*x + beta*y`.
*
* @module @stdlib/blas/base/ndarray/sgemv
*
* @example
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
* var sgemv = require( '@stdlib/blas/base/ndarray/sgemv' );
*
* var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
* var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Vector( [ 4.0, 5.0 ] );
*
* var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
*     'dtype': 'int8'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
* var beta = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
*
* var out = sgemv( [ A, x, y, trans, alpha, beta ] );
* // returns <ndarray>[ 18.0, 37.0 ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
