/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 1 routine to find the euclidean norm of a complex double-precision floating-point vector.
*
* @module @stdlib/blas/base/dznrm2
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var dznrm2 = require( '@stdlib/blas/base/dznrm2' );
*
* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = dznrm2( 4, zx, 1 );
* // returns ~0.8
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var dznrm2 = require( '@stdlib/blas/base/dznrm2' );
*
* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = dznrm2.ndarray( 4, zx, 1, 0 );
* // returns ~0.8
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dznrm2;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dznrm2 = main;
} else {
	dznrm2 = tmp;
}


// EXPORTS //

module.exports = dznrm2;

// exports: { "ndarray": "dznrm2.ndarray" }
