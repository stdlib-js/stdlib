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
* Sort a single-precision floating-point strided array.
*
* @module @stdlib/blas/ext/base/ssort
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssort = require( '@stdlib/blas/ext/base/ssort' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* ssort( x.length, 1.0, x, 1 );
* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssort = require( '@stdlib/blas/ext/base/ssort' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* ssort.ndarray( x.length, 1.0, x, 1, 0 );
* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var ssort;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	ssort = main;
} else {
	ssort = tmp;
}


// EXPORTS //

module.exports = ssort;

// exports: { "ndarray": "ssort.ndarray" }
