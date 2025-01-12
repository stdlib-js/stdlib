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
* @module @stdlib/lapack/base/zlacpy
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zlacpy = require( '@stdlib/lapack/base/zlacpy' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* zlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
*
* var z = B.get( 0 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 1.0
*
* v = imag( z );
* // returns 2.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zlacpy = require( '@stdlib/lapack/base/zlacpy' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex128Array( 12 );
*
* zlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zlacpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zlacpy = main;
} else {
	zlacpy = tmp;
}


// EXPORTS //

module.exports = zlacpy;

// exports: { "ndarray": "zlacpy.ndarray" }
