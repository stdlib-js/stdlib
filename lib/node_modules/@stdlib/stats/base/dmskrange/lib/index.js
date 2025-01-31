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
* Compute the range of a double-precision floating-point strided array according to a mask.
*
* @module @stdlib/stats/base/dmskrange
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var dmskrange = require( '@stdlib/stats/base/dmskrange' );
*
* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
*
* var v = dmskrange( x.length, x, 1 );
* // returns 4.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var dmskrange = require( '@stdlib/stats/base/dmskrange' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = dmskrange.ndarray( 5, x, 2, 1, mask, 2, 1 );
* // returns 6.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dmskrange;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dmskrange = main;
} else {
	dmskrange = tmp;
}


// EXPORTS //

module.exports = dmskrange;

// exports: { "ndarray": "dmskrange.ndarray" }
