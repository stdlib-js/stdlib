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
* LAPACK routine to set the off-diagonal elements and the diagonal elements of a double-precision complex floating-point matrix to specified values.
*
* @module @stdlib/lapack/base/zlaset
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zlaset = require( '@stdlib/lapack/base/zlaset' );
*
* var A = new Complex128Array( 4 );
* var alpha = new Complex128( 1.0, 2.0 );
* var beta = new Complex128( 3.0, 4.0 );
*
* zlaset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 );
*
* var z = A.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 4.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zlaset = require( '@stdlib/lapack/base/zlaset' );
*
* var A = new Complex128Array( 5 );
* var alpha = new Complex128( 1.0, 2.0 );
* var beta = new Complex128( 3.0, 4.0 );
*
* zlaset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 4.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zlaset;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zlaset = main;
} else {
	zlaset = tmp;
}


// EXPORTS //

module.exports = zlaset;

// exports: { "ndarray": "zlaset.ndarray" }
