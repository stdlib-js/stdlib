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
* Test whether at least one element in a single-precision floating-point strided array is truthy.
*
* @module @stdlib/blas/ext/base/sany
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sany = require( '@stdlib/blas/ext/base/sany' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = sany( x.length, x, 1 );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sany = require( '@stdlib/blas/ext/base/sany' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = sany.ndarray( x.length, x, 1, 0 );
* // returns true
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sany;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sany = main;
} else {
	sany = tmp;
}


// EXPORTS //

module.exports = sany;

// exports: { "ndarray": "sany.ndarray" }
