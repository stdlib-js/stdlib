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
* Reflect the lower triangular part of a single-precision complex floating-point matrix `A` into the upper triangular part of another matrix `B`.
*
* @module @stdlib/blas/ext/base/ctril2triu
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ctril2triu = require( '@stdlib/blas/ext/base/ctril2triu' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* ctril2triu( 'row-major', 2, 2, 0, A, 2, B, 2 );
* // B => <Complex64Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ctril2triu = require( '@stdlib/blas/ext/base/ctril2triu' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* ctril2triu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex64Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var ctril2triu;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	ctril2triu = main;
} else {
	ctril2triu = tmp;
}


// EXPORTS //

module.exports = ctril2triu;

// exports: { "ndarray": "ctril2triu.ndarray" }
