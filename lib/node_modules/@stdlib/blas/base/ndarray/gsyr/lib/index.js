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
* BLAS level 2 routine to perform the symmetric rank 1 operation `A = alpha*x*x^T + A`.
*
* @module @stdlib/blas/base/ndarray/gsyr
*
* @example
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
* var gsyr = require( '@stdlib/blas/base/ndarray/gsyr' );
*
* var x = vector( [ 1.0, 2.0, 3.0 ], 'generic' );
* var A = matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ], 'generic' );
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int32'
* });
* var alpha = scalar2ndarray( 2.0, {
*     'dtype': 'generic'
* });
*
* var y = gsyr( [ x, A, uplo, alpha ] );
* // returns <ndarray>[ [ 3.0, 6.0, 9.0 ], [ 2.0, 9.0, 14.0 ], [ 3.0, 2.0, 19.0 ] ]
*
* var bool = ( y === A );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
