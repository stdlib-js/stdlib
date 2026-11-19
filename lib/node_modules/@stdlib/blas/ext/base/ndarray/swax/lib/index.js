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
* Multiply each element in an input one-dimensional single-precision floating-point ndarray by a scalar constant and assign the results to elements in a one-dimensional single-precision floating-point output ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/swax
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var swax = require( '@stdlib/blas/ext/base/ndarray/swax' );
*
* var x = new Float32Vector( [ -2.0, 1.0, 3.0, -5.0 ] );
* var w = new Float32Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float32'
* });
*
* var out = swax( [ x, w, alpha ] );
* // returns <ndarray>[ -10.0, 5.0, 15.0, -25.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var swax;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	swax = main;
} else {
	swax = tmp;
}


// EXPORTS //

module.exports = swax;
