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
var max = require( '@stdlib/math/base/special/max' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV`.
*
* @param {string} order - storage layout
* @param {PositiveInteger} N - number of columns in `A`
* @param {Float32Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {NonNegativeInteger} k1 - index of first row to interchange
* @param {NonNegativeInteger} k2 - index of last row to interchange
* @param {Int32Array} IPIV - vector of pivot indices
* @param {integer} incx - increment between successive values of `IPIV`
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} fourth argument must be greater than or equal to max(1,N)
* @returns {Float32Array} permuted matrix `A`
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Float32Array = require( '@stdlib/array/float32' );
*
* var IPIV = new Int32Array( [ 2, 0, 1 ] );
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
* // A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
*/
function slaswp( order, N, A, LDA, k1, k2, IPIV, incx ) {
	var tmp;
	var inc;
	var sa1;
	var sa2;
	var io;
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( order === 'row-major' && LDA < max( 1, N ) ) {
		throw new RangeError( format( 'invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.', N, LDA ) );
	}
	if ( incx > 0 ) {
		inc = 1;
		io = k1;
	} else if ( incx < 0 ) {
		inc = -1;
		io = k1 + ( (k1-k2) * incx );
		tmp = k1;
		k1 = k2;
		k2 = tmp;
	} else {
		return A;
	}
	if ( order === 'column-major' ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
	}
	return base( N, A, sa1, sa2, 0, k1, k2, inc, IPIV, incx, io );
}


// EXPORTS //

module.exports = slaswp;
