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
* BLAS level 2 routine to perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y` or `y = α*A^H*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @module @stdlib/blas/base/cgemv
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cgemv = require( '@stdlib/blas/base/cgemv' );
*
* var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0 ] );
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0 ] );
* var y = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
* var alpha = new Complex64( 0.5, 0.5 );
* var beta = new Complex64( 0.5, -0.5 );
*
* cgemv( 'column-major', 'no-transpose', 4, 2, alpha, A, 4, x, 1, beta, y, 1 );
* // y => <Complex64Array>[ -10.0, 11.0, -12.0, 14.0, -14.0, 17.0, -16.0, 20.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cgemv = require( '@stdlib/blas/base/cgemv' );
*
* var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0 ] );
* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0 ] );
* var y = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
* var alpha = new Complex64( 0.5, 0.5 );
* var beta = new Complex64( 0.5, -0.5 );
*
* cgemv.ndarray( 'no-transpose', 4, 2, alpha, A, 1, 4, 0, x, 1, 0, beta, y, 1, 0 );
* // y => <Complex64Array>[ -10.0, 11.0, -12.0, 14.0, -14.0, 17.0, -16.0, 20.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var cgemv;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cgemv = main;
} else {
	cgemv = tmp;
}


// EXPORTS //

module.exports = cgemv;

// exports: { "ndarray": "cgemv.ndarray" }
