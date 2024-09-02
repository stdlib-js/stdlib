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
* BLAS level 3 routine to perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* @module @stdlib/blas/base/dgemm
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dgemm = require( '@stdlib/blas/base/dgemm' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* dgemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
* // C => <Float64Array>[ 2.0, 5.0, 6.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dgemm = require( '@stdlib/blas/base/dgemm' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* dgemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
* // C => <Float64Array>[ 2.0, 5.0, 6.0, 11.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dgemm;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dgemm = main;
} else {
	dgemm = tmp;
}


// EXPORTS //

module.exports = dgemm;

// exports: { "ndarray": "dgemm.ndarray" }
