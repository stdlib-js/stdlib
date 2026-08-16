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
* Fill a double-precision floating-point strided array with logarithmically spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/dlogspace
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlogspace = require( '@stdlib/blas/ext/base/dlogspace' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlogspace = require( '@stdlib/blas/ext/base/dlogspace' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dlogspace.ndarray( x.length, 10.0, 0.0, 5.0, false, x, 1, 0 );
* // x => <Float64Array>[ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlogspace;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlogspace = main;
} else {
	dlogspace = tmp;
}


// EXPORTS //

module.exports = dlogspace;

// exports: { "ndarray": "dlogspace.ndarray" }
