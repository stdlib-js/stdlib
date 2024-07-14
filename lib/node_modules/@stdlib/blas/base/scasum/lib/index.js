/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 1 routine to compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
*
* @module @stdlib/blas/base/scasum
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scasum = require( '@stdlib/blas/base/scasum' );
*
* var cx = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var out = scasum( cx.length, cx, 1 );
* // returns 19.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scasum = require( '@stdlib/blas/base/scasum' );
*
* var cx = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var out = scasum.ndarray( cx.length, cx, 1, 0 );
* // returns 19.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var scasum;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	scasum = main;
} else {
	scasum = tmp;
}


// EXPORTS //

module.exports = scasum;

// exports: { "ndarray": "scasum.ndarray" }
