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

// MODULES //

var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.
*
* ## Notes
*
* -   `DL` should have `N-1` elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
* -   `D` is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
* -   `DU` should have `N-1` elements and is overwritten by the elements of the first super-diagonal of `U`.
* -   `DU2` should have `N-2` elements and is overwritten by the elements of the second super-diagonal of `U`.
* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
*
* @param {NonNegativeInteger} N - number of rows/columns in `A`
* @param {Float64Array} DL - the first sub diagonal of `A`
* @param {Float64Array} D - the diagonal of `A`, expects N indexed elements
* @param {Float64Array} DU - the first super-diagonal of `A`
* @param {Float64Array} DU2 - the second super-diagonal of `U`
* @param {Int32Array} IPIV - vector of pivot indices
* @throws {RangeError} first argument must be a nonnegative integer
* @returns {integer} status code
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Int32Array = require( '@stdlib/array/int32' );
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
*/
function dgttrf( N, DL, D, DU, DU2, IPIV ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	return base( N, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
}


// EXPORTS //

module.exports = dgttrf;
