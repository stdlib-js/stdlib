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
* Compute the mid-range of a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/stats/base/ndarray/smidrange
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var smidrange = require( '@stdlib/stats/base/ndarray/smidrange' );
*
* var x = new Float32Vector( [ 1.0, -2.0, 4.0, 2.0 ] );
*
* var v = smidrange( [ x ] );
* // returns 1.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var smidrange;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	smidrange = main;
} else {
	smidrange = tmp;
}


// EXPORTS //

module.exports = smidrange;
