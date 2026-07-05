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

/* eslint-disable max-len */

'use strict';

// MODULES //

var isOperationSide = require( '@stdlib/blas/base/assert/is-operation-side' );
var operationSides = require( '@stdlib/blas/base/operation-sides' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.
*
* ## Notes
*
* -   If `side = 'left'`,
*
*     -   `work` should have `N` indexed elements.
*     -   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `H * C`.
*
* -   If `side = 'right'`,
*
*     -   `work` should have `M` indexed elements.
*     -   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
*     -   `C` is overwritten by `C * H`.
*
* @param {string} side - specifies the side of multiplication with `C`
* @param {NonNegativeInteger} M - number of rows in `C`
* @param {NonNegativeInteger} N - number of columns in `C`
* @param {Float64Array} V - the vector `v`
* @param {integer} strideV - stride length for `V`
* @param {NonNegativeInteger} offsetV - starting index for `V`
* @param {number} tau - scalar constant
* @param {Float64Array} C - input matrix
* @param {integer} strideC1 - stride of the first dimension of `C`
* @param {integer} strideC2 - stride of the second dimension of `C`
* @param {NonNegativeInteger} offsetC - starting index for `C`
* @param {Float64Array} work - workspace array
* @param {integer} strideWork - stride length for `work`
* @param {NonNegativeInteger} offsetWork - starting index for `work`
* @throws {TypeError} first argument must be a valid side
* @throws {RangeError} fifth argument must not be zero
* @returns {Float64Array} `C * H` or `H * C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
* var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
* var work = new Float64Array( 3 );
*
* var out = dlarf1f( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
* // returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
*/
function dlarf1f( side, M, N, V, strideV, offsetV, tau, C, strideC1, strideC2, offsetC, work, strideWork, offsetWork ) { // eslint-disable-line max-params
	if ( !isOperationSide( side ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be one of the following: "%s". Value: `%s`.', join( operationSides(), '", "' ), side ) );
	}
	if ( strideV === 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be non-zero. Value: `%s`.', strideV ) );
	}
	return base( side, M, N, V, strideV, offsetV, tau, C, strideC1, strideC2, offsetC, work, strideWork, offsetWork );
}


// EXPORTS //

module.exports = dlarf1f;
