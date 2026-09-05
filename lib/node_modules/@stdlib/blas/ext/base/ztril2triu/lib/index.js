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
* Reflect the lower triangular part of a double-precision complex floating-point matrix `A` into the upper triangular part of another matrix `B`.
*
* @module @stdlib/blas/ext/base/ztril2triu
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ztril2triu = require( '@stdlib/blas/ext/base/ztril2triu' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* ztril2triu( 'row-major', 2, 2, 0, A, 2, B, 2 );
* // B => <Complex128Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ztril2triu = require( '@stdlib/blas/ext/base/ztril2triu' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex128Array( 4 );
*
* ztril2triu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => <Complex128Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 7.0, 8.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var ztril2triu;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	ztril2triu = main;
} else {
	ztril2triu = tmp;
}


// EXPORTS //

module.exports = ztril2triu;

// exports: { "ndarray": "ztril2triu.ndarray" }
