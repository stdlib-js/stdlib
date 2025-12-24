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
* LAPACK routine to find the index of the last non-zero row in an input matrix.
*
* @module @stdlib/lapack/base/iladlr
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
* var iladlr = require( '@stdlib/lapack/base/iladlr' );
*
* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr( 'row-major', 3, 2, A, 2 );
* // returns 1
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var iladlr;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	iladlr = main;
} else {
	iladlr = tmp;
}


// EXPORTS //

module.exports = iladlr;
