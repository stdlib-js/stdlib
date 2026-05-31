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
* Add a scalar constant to each element in a single-precision complex floating-point strided array.
*
* @module @stdlib/blas/ext/base/capx
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var capx = require( '@stdlib/blas/ext/base/capx' );
*
* var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var alpha = new Complex64( 5.0, 0.0 );
*
* capx( x.length, alpha, x, 1 );
* // x => <Complex64Array>[ 3.0, 1.0, 8.0, -5.0, 9.0, 0.0, 4.0, -3.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var capx = require( '@stdlib/blas/ext/base/capx' );
*
* var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var alpha = new Complex64( 5.0, 0.0 );
*
* capx.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex64Array>[ 3.0, 1.0, 8.0, -5.0, 9.0, 0.0, 4.0, -3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var capx;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	capx = main;
} else {
	capx = tmp;
}


// EXPORTS //

module.exports = capx;

// exports: { "ndarray": "capx.ndarray" }
