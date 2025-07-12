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
* LAPACK routine to compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
*
* @module @stdlib/lapack/base/spttrf
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var spttrf = require( '@stdlib/lapack/base/spttrf' );
*
* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float32Array( [ 1.0, 2.0 ] );
*
* spttrf( 3, D, E );
* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float32Array>[ 0.25, ~0.4210 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var spttrf = require( '@stdlib/lapack/base/spttrf' );
*
* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float32Array( [ 1.0, 2.0 ] );
*
* spttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float32Array>[ 0.25, ~0.4210 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var spttrf;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	spttrf = main;
} else {
	spttrf = tmp;
}


// EXPORTS //

module.exports = spttrf;
