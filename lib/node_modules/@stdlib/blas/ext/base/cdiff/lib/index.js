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
* Calculate the k-th discrete forward difference of a single-precision complex floating-point strided array.
*
* @module @stdlib/blas/ext/base/cdiff
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cdiff = require( '@stdlib/blas/ext/base/cdiff' );
*
* var x = new Complex64Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
* var p = new Complex64Array( [ 1.0, -1.0 ] );
* var a = new Complex64Array( [ 11.0, -11.0 ] );
* var out = new Complex64Array( 6 );
* var w = new Complex64Array( 6 );
*
* cdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
* // out => <Complex64Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cdiff;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cdiff = main;
} else {
	cdiff = tmp;
}


// EXPORTS //

module.exports = cdiff;

// exports: { "ndarray": "cdiff.ndarray" }
