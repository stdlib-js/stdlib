/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the variance of a double-precision floating-point strided array using Welford's algorithm.
*
* @module @stdlib/stats/base/dvariancewd
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dvariancewd = require( '@stdlib/stats/base/dvariancewd' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dvariancewd( x.length, 1, x, 1 );
* // returns ~4.3333
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dvariancewd = require( '@stdlib/stats/base/dvariancewd' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dvariancewd.ndarray( 4, 1, x, 2, 1 );
* // returns 6.25
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dvariancewd;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dvariancewd = main;
} else {
	dvariancewd = tmp;
}


// EXPORTS //

module.exports = dvariancewd;

// exports: { "ndarray": "dvariancewd.ndarray" }
