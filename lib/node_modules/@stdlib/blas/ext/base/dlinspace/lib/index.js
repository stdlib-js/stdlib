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
* Fill a double-precision floating-point strided array with linearly spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/dlinspace
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlinspace = require( '@stdlib/blas/ext/base/dlinspace' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlinspace( x.length, 0.0, 100.0, true, x, 1 );
* // x => <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlinspace = require( '@stdlib/blas/ext/base/dlinspace' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlinspace.ndarray( x.length, 0.0, 100.0, false, x, 1, 0 );
* // x => <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlinspace;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlinspace = main;
} else {
	dlinspace = tmp;
}


// EXPORTS //

module.exports = dlinspace;

// exports: { "ndarray": "dlinspace.ndarray" }
