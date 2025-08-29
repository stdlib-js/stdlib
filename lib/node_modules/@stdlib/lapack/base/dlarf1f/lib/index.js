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
* LAPACK routine to apply a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.
*
* @module @stdlib/lapack/base/dlarf1f
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlarf1f = require( '@stdlib/lapack/base/dlarf1f' );
*
* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
* var work = new Float64Array( 3 );
*
* var out = dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work );
* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlarf1f;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlarf1f = main;
} else {
	dlarf1f = tmp;
}


// EXPORTS //

module.exports = dlarf1f;
