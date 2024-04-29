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

var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
var offsetView = require( '@stdlib/strided/base/offset-view' );
var addon = require( './dger.native.js' );


// MAIN //

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`.
*
* @param {string} order - storage layout
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} x - an `M` element vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} y - an `N` element vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Float64Array} A - matrix of coefficients
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var M = 4;
* var N = 3;
*
* var B = new Float64Array( M*N );
*
* var x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 4.0, 0.0 ] );
*
* dger( 'row-major', N, M, 1.0, y, 1, 0, x, 1, 0, B, M );
* // B => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 0.0, 4.0, 8.0, 12.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function dger( order, M, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, LDA ) { // eslint-disable-line max-len, max-params
	var viewX;
	var viewY;

	offsetX = minViewBufferIndex( N, strideX, offsetX );
	offsetY = minViewBufferIndex( N, strideY, offsetY );

	viewX = offsetView( x, offsetX );
	viewY = offsetView( y, offsetY );

	addon( 101, M, N, alpha, viewX, strideX, viewY, strideY, A, LDA ); // FIXME: resolve order enum
	return A;
}


// EXPORTS //

module.exports = dger;
