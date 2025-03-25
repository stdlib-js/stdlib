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
* LAPACK routine to copy all or part of a matrix `A` to another matrix `B`.
*
* @module @stdlib/lapack/base/slacpy
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var slacpy = require( '@stdlib/lapack/base/slacpy' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( 4 );
*
* slacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
* // B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var slacpy = require( '@stdlib/lapack/base/slacpy' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var B = new Float32Array( 6 );
*
* slacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
* // B => <Float32Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var slacpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	slacpy = main;
} else {
	slacpy = tmp;
}


// EXPORTS //

module.exports = slacpy;

// exports: { "ndarray": "slacpy.ndarray" }
