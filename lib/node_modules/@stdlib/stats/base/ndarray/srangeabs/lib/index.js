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
* Compute the range of absolute values of a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/stats/base/ndarray/srangeabs
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var srangeabs = require( '@stdlib/stats/base/ndarray/srangeabs' );
*
* var xbuf = new Float32Array( [ 1.0, -3.0, 4.0, 2.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = srangeabs( [ x ] );
* // returns 3.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var srangeabs;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	srangeabs = main;
} else {
	srangeabs = tmp;
}


// EXPORTS //

module.exports = srangeabs;
