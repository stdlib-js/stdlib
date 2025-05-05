/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* LAPACK routine to set the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
*
* @module @stdlib/lapack/base/claset
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var claset = require( '@stdlib/lapack/base/claset' );
*
* var A = new Complex64Array( 4 );
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
*
* var z = A.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var claset = require( '@stdlib/lapack/base/claset' );
*
* var A = new Complex64Array( 5 );
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var claset;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	claset = main;
} else {
	claset = tmp;
}


// EXPORTS //

module.exports = claset;

// exports: { "ndarray": "claset.ndarray" }
