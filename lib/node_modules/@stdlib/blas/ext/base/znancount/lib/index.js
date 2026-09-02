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
* Compute the number of non-`NaN` elements in a double-precision complex floating-point strided array.
*
* @module @stdlib/blas/ext/base/znancount
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var znancount = require( '@stdlib/blas/ext/base/znancount' );
*
* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
*
* var v = znancount( x.length, x, 1 );
* // returns 2
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var znancount = require( '@stdlib/blas/ext/base/znancount' );
*
* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0, 5.0, 6.0 ] );
*
* var v = znancount.ndarray( 2, x, 2, 1 );
* // returns 1
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var znancount;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	znancount = main;
} else {
	znancount = tmp;
}


// EXPORTS //

module.exports = znancount;

// exports: { "ndarray": "znancount.ndarray" }
