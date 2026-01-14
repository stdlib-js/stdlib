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
* BLAS level 2 routine to perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
*
* @module @stdlib/blas/base/strmv
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var strmv = require( '@stdlib/blas/base/strmv' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* strmv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, 1 );
* // x => <Float32Array>[ 14.0, 8.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var strmv = require( '@stdlib/blas/base/strmv' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* strmv.ndarray( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, 1, 0 );
* // x => <Float32Array>[ 14.0, 8.0, 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var strmv;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	strmv = main;
} else {
	strmv = tmp;
}


// EXPORTS //

module.exports = strmv;

// exports: { "ndarray": "strmv.ndarray" }
