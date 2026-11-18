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
* BLAS level 2 routine to perform the symmetric rank 2 operation `A = alpha*x*y^T + alpha*y*x^T + A`.
*
* @module @stdlib/blas/base/ndarray/dsyr2
*
* @example
* var Float64Matrix = require( '@stdlib/ndarray/matrix/float64' );
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var dsyr2 = require( '@stdlib/blas/base/ndarray/dsyr2' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Vector( [ 2.0, 1.0, 3.0 ] );
* var A = new Float64Matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ] );
*
* var alpha = scalar2ndarray( 2.0, {
*     'dtype': 'float64'
* });
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int32'
* });
* var out = dsyr2( [ x, y, A, uplo, alpha ] );
* // returns <ndarray>[ [ 9.0, 12.0, 21.0 ], [ 2.0, 9.0, 20.0 ], [ 3.0, 2.0, 37.0 ] ]
*
* var bool = ( out === A );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
