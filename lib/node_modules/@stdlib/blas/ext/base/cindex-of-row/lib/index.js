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
* Return the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.
*
* @module @stdlib/blas/ext/base/cindex-of-row
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var cindexOfRow = require( '@stdlib/blas/ext/base/cindex-of-row' );
*
* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = cindexOfRow( 'column-major', 3, 2, A, 3, x, 1, workspace, 1 );
* // returns 1
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var cindexOfRow = require( '@stdlib/blas/ext/base/cindex-of-row' );
*
* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = cindexOfRow.ndarray( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
* // returns 1
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cindexOfRow;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cindexOfRow = main;
} else {
	cindexOfRow = tmp;
}


// EXPORTS //

module.exports = cindexOfRow;

// exports: { "ndarray": "cindexOfRow.ndarray" }
