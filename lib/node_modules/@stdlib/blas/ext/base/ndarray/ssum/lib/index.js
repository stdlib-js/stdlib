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
* Compute the sum of all elements in a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/ssum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ssum = require( '@stdlib/blas/ext/base/ndarray/ssum' );
*
* var buffer = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var x = ndarray( 'float32', buffer, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var out = ssum( [ x ] );
* // returns 1.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var ssum;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	ssum = main;
} else {
	ssum = tmp;
}


// EXPORTS //

module.exports = ssum;
