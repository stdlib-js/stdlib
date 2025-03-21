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
* BLAS level 2 routine to perform the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @module @stdlib/blas/base/sspmv
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sspmv = require( '@stdlib/blas/base/sspmv' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* sspmv( 'column-major', 'lower', 3, 1.0, AP, x, 1, 1.0, y, 1 );
* // y => <Float32Array>[ ~7.0, ~12.0, ~15.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sspmv = require( '@stdlib/blas/base/sspmv' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* sspmv.ndarray( 'column-major', 'lower', 3, 1.0, AP, x, 1, 0, 1.0, y, 1, 0 );
* // y => <Float32Array>[ ~7.0, ~12.0, ~15.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sspmv;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sspmv = main;
} else {
	sspmv = tmp;
}


// EXPORTS //

module.exports = sspmv;

// exports: { "ndarray": "sspmv.ndarray" }
