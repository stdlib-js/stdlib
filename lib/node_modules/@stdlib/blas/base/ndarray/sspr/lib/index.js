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
* BLAS level 2 routine to perform the symmetric rank 1 operation `A = alpha*x*x^T + A` for a symmetric matrix `A` supplied in packed form.
*
* @module @stdlib/blas/base/ndarray/sspr
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var sspr = require( '@stdlib/blas/base/ndarray/sspr' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
* var AP = new Float32Vector( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int8'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
*
* var out = sspr( [ x, AP, uplo, alpha ] );
* // returns <ndarray>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*
* var bool = ( out === AP );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
