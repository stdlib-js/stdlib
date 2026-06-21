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
* Test whether every element in a single-precision floating-point strided array is falsy.
*
* @module @stdlib/blas/ext/base/snone
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var snone = require( '@stdlib/blas/ext/base/snone' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = snone( x.length, x, 1 );
* // returns false
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var snone = require( '@stdlib/blas/ext/base/snone' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = snone.ndarray( x.length, x, 1, 0 );
* // returns false
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var snone;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	snone = main;
} else {
	snone = tmp;
}


// EXPORTS //

module.exports = snone;

// exports: { "ndarray": "snone.ndarray" }
