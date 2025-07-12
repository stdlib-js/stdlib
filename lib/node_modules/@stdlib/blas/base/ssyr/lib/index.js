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
* BLAS level 2 routine to perform the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @module @stdlib/blas/base/ssyr
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssyr = require( '@stdlib/blas/base/ssyr' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
* // A => <Float32Array>[ 2.0, 4.0, 6.0, 0.0, 5.0, 8.0, 0.0, 0.0, 10.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssyr = require( '@stdlib/blas/base/ssyr' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
* // A => <Float32Array>[ 2.0, 4.0, 6.0, 0.0, 5.0, 8.0, 0.0, 0.0, 10.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var ssyr;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	ssyr = main;
} else {
	ssyr = tmp;
}


// EXPORTS //

module.exports = ssyr;

// exports: { "ndarray": "ssyr.ndarray" }
