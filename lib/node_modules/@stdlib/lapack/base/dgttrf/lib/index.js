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
* LAPACK routine to compute an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.
*
* @module @stdlib/lapack/base/dgttrf
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Int32Array = require( '@stdlib/array/int32' );
* var dgttrf = require( '@stdlib/lapack/base/dgttrf' );
*
* var DL = new Float64Array( [ 1.0, 1.0 ] );
* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
* var DU = new Float64Array( [ 1.0, 1.0 ] );
* var DU2 = new Float64Array( [ 0.0 ] );
* var IPIV = new Int32Array( [ 0, 0, 0 ] );
*
* dgttrf( 3, DL, D, DU, DU2, IPIV );
* // DL => <Float64Array>[ 0.5, 0.4 ]
* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
* // DU => <Float64Array>[ 1.0, 1.0 ]
* // DU2 => <Float64Array>[ 0.0 ]
* // IPIV => <Int32Array>[ 0, 1, 2 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Int32Array = require( '@stdlib/array/int32' );
* var dgttrf = require( '@stdlib/lapack/base/dgttrf' );
*
* var DL = new Float64Array( [ 1.0, 1.0 ] );
* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
* var DU = new Float64Array( [ 1.0, 1.0 ] );
* var DU2 = new Float64Array( [ 0.0 ] );
* var IPIV = new Int32Array( [ 0, 0, 0 ] );
*
* dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
* // DL => <Float64Array>[ 0.5, 0.4 ]
* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
* // DU => <Float64Array>[ 1.0, 1.0 ]
* // DU2 => <Float64Array>[ 0.0 ]
* // IPIV => <Int32Array>[ 0, 1, 2 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dgttrf;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dgttrf = main;
} else {
	dgttrf = tmp;
}


// EXPORTS //

module.exports = dgttrf;

// exports: { "ndarray": "dgttrf.ndarray" }
