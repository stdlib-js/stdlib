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
* Copy the lower triangular part of a double-precision floating-point matrix `A` to another matrix `B`.
*
* @module @stdlib/blas/ext/base/dtril
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dtril = require( '@stdlib/blas/ext/base/dtril' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dtril( 'row-major', 2, 2, 0, A, 2, B, 2 );
* // B => <Float64Array>[ 1.0, 0.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dtril = require( '@stdlib/blas/ext/base/dtril' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* dtril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Float64Array>[ 1.0, 0.0, 3.0, 4.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dtril;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dtril = main;
} else {
	dtril = tmp;
}


// EXPORTS //

module.exports = dtril;

// exports: { "ndarray": "dtril.ndarray" }
