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
* Subtract elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assign the results to `y`.
*
* @module @stdlib/blas/ext/base/zxsy
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zxsy = require( '@stdlib/blas/ext/base/zxsy' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
* var y = new Complex128Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );
*
* zxsy( x.length, x, 1, y, 1 );
* // y => <Complex128Array>[ -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zxsy = require( '@stdlib/blas/ext/base/zxsy' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
* var y = new Complex128Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );
*
* zxsy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex128Array>[ -1.0, -5.0, 7.0, -1.0, -11.0, 13.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zxsy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zxsy = main;
} else {
	zxsy = tmp;
}


// EXPORTS //

module.exports = zxsy;

// exports: { "ndarray": "zxsy.ndarray" }
