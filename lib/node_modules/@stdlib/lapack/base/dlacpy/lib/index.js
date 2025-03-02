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
* @module @stdlib/lapack/base/dlacpy
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlacpy = require( '@stdlib/lapack/base/dlacpy' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( 4 );
*
* dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlacpy = require( '@stdlib/lapack/base/dlacpy' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var B = new Float64Array( 6 );
*
* dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
* // B => <Float64Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlacpy;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlacpy = main;
} else {
	dlacpy = tmp;
}


// EXPORTS //

module.exports = dlacpy;

// exports: { "ndarray": "dlacpy.ndarray" }
