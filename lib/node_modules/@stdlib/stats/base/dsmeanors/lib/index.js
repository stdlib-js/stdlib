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
* Compute the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.
*
* @module @stdlib/stats/base/dsmeanors
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var dsmeanors = require( '@stdlib/stats/base/dsmeanors' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dsmeanors( x.length, x, 1 );
* // returns ~0.3333
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var dsmeanors = require( '@stdlib/stats/base/dsmeanors' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dsmeanors.ndarray( 4, x, 2, 1 );
* // returns 1.25
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dsmeanors;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dsmeanors = main;
} else {
	dsmeanors = tmp;
}


// EXPORTS //

module.exports = dsmeanors;

// exports: { "ndarray": "dsmeanors.ndarray" }
