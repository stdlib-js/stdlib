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
* Return the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.
*
* @module @stdlib/blas/ext/base/zlast-index-of-row
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var zlastIndexOfRow = require( '@stdlib/blas/ext/base/zlast-index-of-row' );
*
* // A (row-major) => [ [ 1+0i, 2+0i ], [ 3+0i, 4+0i ], [ 3+0i, 4+0i ] ]
* var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
* var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = zlastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
* // returns 2
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var zlastIndexOfRow = require( '@stdlib/blas/ext/base/zlast-index-of-row' );
*
* // A (row-major) => [ [ 1+0i, 2+0i ], [ 3+0i, 4+0i ], [ 3+0i, 4+0i ] ]
* var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
* var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = zlastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
* // returns 2
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zlastIndexOfRow;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zlastIndexOfRow = main;
} else {
	zlastIndexOfRow = tmp;
}


// EXPORTS //

module.exports = zlastIndexOfRow;

// exports: { "ndarray": "zlastIndexOfRow.ndarray" }
