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

var isLayout = require( '@stdlib/blas/base/assert/is-layout' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Converts a matrix from row-major layout to column-major layout or vice versa.
*
* @param {string} order - storage layout
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float64Array} out - output matrix
* @param {PositiveInteger} LDO - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
* @throws {TypeError} first argument must be a valid order
* @returns {Float64Array} `out`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float64Array( 6 );
*
* out = dgetrans( 'row-major', 2, 3, A, 3, out, 2 );
* // returns <Float64Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*/
function dgetrans( order, M, N, A, LDA, out, LDO ) {
	var sa1;
	var sa2;
	var so1;
	var so2;

	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( order === 'column-major' ) {
		sa1 = 1;
		sa2 = LDA;
		so1 = 1;
		so2 = LDO;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
		so1 = LDO;
		so2 = 1;
	}
	return base( M, N, A, sa1, sa2, 0, out, so1, so2, 0 );
}


// EXPORTS //

module.exports = dgetrans;
