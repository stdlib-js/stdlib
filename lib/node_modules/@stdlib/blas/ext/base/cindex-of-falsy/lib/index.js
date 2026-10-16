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
* Return the index of the first falsy element in a single-precision complex floating-point strided array.
*
* @module @stdlib/blas/ext/base/cindex-of-falsy
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cindexOfFalsy = require( '@stdlib/blas/ext/base/cindex-of-falsy' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 4.0, 5.0 ] );
*
* var idx = cindexOfFalsy( x.length, x, 1 );
* // returns 1
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var cindexOfFalsy = require( '@stdlib/blas/ext/base/cindex-of-falsy' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 4.0, 5.0 ] );
*
* var idx = cindexOfFalsy.ndarray( x.length, x, 1, 0 );
* // returns 1
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cindexOfFalsy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cindexOfFalsy = main;
} else {
	cindexOfFalsy = tmp;
}


// EXPORTS //

module.exports = cindexOfFalsy;

// exports: { "ndarray": "cindexOfFalsy.ndarray" }
