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
* Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges and alternative indexing semantics.
*
* ## Notes
*
* -   `DL` should have `N-1` indexed elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
* -   `D` should have `N` indexed elements and is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
* -   `DU` should have `N-1` indexed elements and is overwritten by the elements of the first super-diagonal of `U`.
* -   `DU2` should have `N-2` indexed elements and is overwritten by the elements of the second super-diagonal of `U`.
* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
*
* @param {NonNegativeInteger} N - number of rows/columns in `A`
* @param {Float64Array} DL - the first sub diagonal of `A`
* @param {integer} strideDL - stride length for `DL`
* @param {NonNegativeInteger} offsetDL - starting index of `DL`
* @param {Float64Array} D - the diagonal of `A`
* @param {integer} strideD - stride length for `D`
* @param {NonNegativeInteger} offsetD - starting index of `D`
* @param {Float64Array} DU - the first super-diagonal of `A`
* @param {integer} strideDU - stride length for `DU`
* @param {NonNegativeInteger} offsetDU - starting index of `DU`
* @param {Float64Array} DU2 - the second super-diagonal of `U`
* @param {integer} strideDU2 - stride length for `DU2`
* @param {NonNegativeInteger} offsetDU2 - starting index of `DU2`
* @param {Int32Array} IPIV - vector of pivot indices
* @param {integer} strideIPIV - stride length for `IPIV`
* @param {NonNegativeInteger} offsetIPIV - starting index of `IPIV`
* @throws {RangeError} first argument must be a nonnegative integer
* @returns {integer} status code
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var DL = new Float64Array( [ 1.0, 1.0 ] );
* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
* var DU = new Float64Array( [ 1.0, 1.0 ] );
* var DU2 = new Float64Array( [ 0.0 ] );
* var IPIV = new Int32Array( [ 0, 0, 0 ] );
*
* dgttrf( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
* // DL => <Float64Array>[ 0.5, 0.4 ]
* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
* // DU => <Float64Array>[ 1.0, 1.0 ]
* // DU2 => <Float64Array>[ 0.0 ]
* // IPIV => <Int32Array>[ 0, 1, 2 ]
*/
function dgttrf( N, DL, strideDL, offsetDL, D, strideD, offsetD, DU, strideDU, offsetDU, DU2, strideDU2, offsetDU2, IPIV, strideIPIV, offsetIPIV ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point, max-len, max-params
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	return base( N, DL, strideDL, offsetDL, D, strideD, offsetD, DU, strideDU, offsetDU, DU2, strideDU2, offsetDU2, IPIV, strideIPIV, offsetIPIV ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dgttrf;
