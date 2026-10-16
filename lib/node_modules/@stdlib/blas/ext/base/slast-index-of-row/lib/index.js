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
* Return the index of the last row in a single-precision floating-point input matrix which has the same elements as a provided search vector.
*
* @module @stdlib/blas/ext/base/slast-index-of-row
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var slastIndexOfRow = require( '@stdlib/blas/ext/base/slast-index-of-row' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
* var x = new Float32Array( [ 3.0, 4.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = slastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
* // returns 2
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var slastIndexOfRow = require( '@stdlib/blas/ext/base/slast-index-of-row' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
* var x = new Float32Array( [ 3.0, 4.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = slastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
* // returns 2
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var slastIndexOfRow;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	slastIndexOfRow = main;
} else {
	slastIndexOfRow = tmp;
}


// EXPORTS //

module.exports = slastIndexOfRow;

// exports: { "ndarray": "slastIndexOfRow.ndarray" }
