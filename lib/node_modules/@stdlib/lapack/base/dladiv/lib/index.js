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
* LAPACK routine to divide two double-precision complex floating-point numbers.
*
* @module @stdlib/lapack/base/dladiv
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dladiv = require( '@stdlib/lapack/base/dladiv' );
*
* var P = new Float64Array( 1 );
* var Q = new Float64Array( 1 );
*
* dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
* // P => <Float64Array>[ 5.0 ]
* // Q => <Float64Array>[ 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dladiv;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dladiv = main;
} else {
	dladiv = tmp;
}


// EXPORTS //

module.exports = dladiv;
