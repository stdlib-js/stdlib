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
* Calculate the k-th discrete forward difference of a one-dimensional single-precision complex floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/cdiff
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var cdiff = require( '@stdlib/blas/ext/base/ndarray/cdiff' );
*
* var x = new Complex64Vector( [ 2.0, -2.0, 4.0, -4.0 ] );
* var prepend = new Complex64Vector( [ 1.0, -1.0 ] );
* var append = new Complex64Vector( [ 7.0, -7.0 ] );
* var out = new Complex64Vector( 3 );
* var workspace = new Complex64Vector( 3 );
* var k = scalar2ndarray( 1, {
*     'dtype': 'generic'
* });
*
* var y = cdiff( [ x, prepend, append, out, workspace, k ] );
* // returns <ndarray>[ <Complex64>[ 1.0, -1.0 ], <Complex64>[ 2.0, -2.0 ], <Complex64>[ 3.0, -3.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
