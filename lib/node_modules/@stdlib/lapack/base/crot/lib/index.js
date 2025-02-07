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
* LAPACK auxiliary routine to apply a plane rotation with real cosine and complex sine.
*
* @module @stdlib/lapack/base/crot
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var crot = require( '@stdlib/lapack/base/crot' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.6, 0 );
*
* crot( cx.length, cx, 1, cy, 1, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-0.6
*
* var im = imagf( z );
* // returns ~-1.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var crot = require( '@stdlib/lapack/base/crot' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.6, 0 );
*
* crot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-0.6
*
* var im = imagf( z );
* // returns ~-1.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var crot;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	crot = main;
} else {
	crot = tmp;
}


// EXPORTS //

module.exports = crot;

// exports: { "ndarray": "crot.ndarray" }
