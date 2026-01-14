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

// MODULES //

var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A` using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - order of matrix `A`
* @param {Float64Array} D - the `N` diagonal elements of `A`
* @param {integer} strideD - stride length for `D`
* @param {NonNegativeInteger} offsetD - starting index of `D`
* @param {Float64Array} E - the `N-1` subdiagonal elements of `A`
* @param {integer} strideE - stride length for `E`
* @param {NonNegativeInteger} offsetE - starting index of `E`
* @throws {RangeError} first argument must be a nonnegative integer
* @returns {integer} status code
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float64Array( [ 1.0, 2.0 ] );
*
* dpttrf( 3, D, 1, 0, E, 1, 0 );
* // D => <Float64Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float64Array>[ 0.25, ~0.4210 ]
*/
function dpttrf( N, D, strideD, offsetD, E, strideE, offsetE ) {
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	return base( N, D, strideD, offsetD, E, strideE, offsetE );
}


// EXPORTS //

module.exports = dpttrf;
