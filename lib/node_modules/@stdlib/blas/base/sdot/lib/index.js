/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* BLAS level 1 routine to compute the dot product of two single-precision floating-point vectors.
*
* @module @stdlib/blas/base/sdot
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdot = require( '@stdlib/blas/base/sdot' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdot( x.length, x, 1, y, 1 );
* // returns -5.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdot = require( '@stdlib/blas/base/sdot' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sdot;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sdot = main;
} else {
	sdot = tmp;
}


// EXPORTS //

module.exports = sdot;

// exports: { "ndarray": "sdot.ndarray" }
