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
* Multiply each element in a single-precision floating-point strided array by a scalar constant and add a scalar constant to each result.
*
* @module @stdlib/blas/ext/base/saxpb
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var saxpb = require( '@stdlib/blas/ext/base/saxpb' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* saxpb( x.length, 5.0, 3.0, x, 1 );
* // x => <Float32Array>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var saxpb = require( '@stdlib/blas/ext/base/saxpb' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* saxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 );
* // x => <Float32Array>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var saxpb;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	saxpb = main;
} else {
	saxpb = tmp;
}


// EXPORTS //

module.exports = saxpb;

// exports: { "ndarray": "saxpb.ndarray" }
