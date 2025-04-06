/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* LAPACK BLAS-like level-1 routine to conjugate each element in a single-precision complex floating-point vector.
*
* @module @stdlib/lapack/base/clacgv
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var clacgv = require( '@stdlib/lapack/base/clacgv' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* clacgv( 3, cx, 1 );
*
* var z = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 1.0
*
* var im = imagf( z );
* // returns -2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var clacgv = require( '@stdlib/lapack/base/clacgv' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* clacgv.ndarray( 3, 1, 0 );
*
* var z = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 1.0
*
* var im = imagf( z );
* // returns -2.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var clacgv;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	clacgv = main;
} else {
	clacgv = tmp;
}


// EXPORTS //

module.exports = clacgv;

// exports: { "ndarray": "clacgv.ndarray" }
