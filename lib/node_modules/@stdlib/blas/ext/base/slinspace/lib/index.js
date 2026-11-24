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
* Fill a single-precision floating-point strided array with linearly spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/slinspace
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var slinspace = require( '@stdlib/blas/ext/base/slinspace' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace( x.length, 0.0, 100.0, true, x, 1 );
* // x => <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var slinspace = require( '@stdlib/blas/ext/base/slinspace' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace.ndarray( x.length, 0.0, 100.0, false, x, 1, 0 );
* // x => <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var slinspace;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	slinspace = main;
} else {
	slinspace = tmp;
}


// EXPORTS //

module.exports = slinspace;

// exports: { "ndarray": "slinspace.ndarray" }
