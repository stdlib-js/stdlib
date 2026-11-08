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
* BLAS level 1 routine to compute the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point strided array.
*
* @module @stdlib/blas/base/dzasum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var dzasum = require( '@stdlib/blas/base/dzasum' );
*
* var x = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var out = dzasum( x.length, x, 1 );
* // returns 19.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var dzasum = require( '@stdlib/blas/base/dzasum' );
*
* var x = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var out = dzasum.ndarray( x.length, x, 1, 0 );
* // returns 19.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dzasum;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dzasum = main;
} else {
	dzasum = tmp;
}


// EXPORTS //

module.exports = dzasum;

// exports: { "ndarray": "dzasum.ndarray" }
