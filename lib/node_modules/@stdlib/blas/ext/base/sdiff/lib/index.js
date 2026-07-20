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
* Calculate the k-th discrete forward difference of a single-precision floating-point strided array.
*
* @module @stdlib/blas/ext/base/sdiff
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdiff = require( '@stdlib/blas/ext/base/sdiff' );
*
* var x = new Float32Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float32Array( [ 1.0 ] );
* var a = new Float32Array( [ 22.0 ] );
* var out = new Float32Array( 5 );
* var w = new Float32Array( 6 );
*
* sdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
*
* console.log( out );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdiff = require( '@stdlib/blas/ext/base/sdiff' );
*
* var x = new Float32Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float32Array( [ 1.0 ] );
* var a = new Float32Array( [ 22.0 ] );
* var out = new Float32Array( 5 );
* var w = new Float32Array( 6 );
*
* sdiff.ndarray( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
*
* console.log( out );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sdiff;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sdiff = main;
} else {
	sdiff = tmp;
}


// EXPORTS //

module.exports = sdiff;

// exports: { "ndarray": "sdiff.ndarray" }
