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
* LAPACK routine to copy all or part of a matrix `A` to another matrix `B`.
*
* @module @stdlib/lapack/base/clacpy
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var clacpy = require( '@stdlib/lapack/base/clacpy' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* clacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
*
* var z = B.get( 0 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 1.0
*
* v = imagf( z );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var clacpy = require( '@stdlib/lapack/base/clacpy' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex64Array( 12 );
*
* clacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 3.0
*
* v = imagf( z );
* // returns 4.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var clacpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	clacpy = main;
} else {
	clacpy = tmp;
}


// EXPORTS //

module.exports = clacpy;

// exports: { "ndarray": "clacpy.ndarray" }
