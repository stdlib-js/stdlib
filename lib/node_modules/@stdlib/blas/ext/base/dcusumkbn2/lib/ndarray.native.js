/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './dcusumkbn2.native.js' );


// MAIN //

/**
* Computes the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( x.length );
* var N = floor( x.length / 2 );
*
* var v = dcusumkbn2( N, 0.0, x, 2, 1, y, 1, 0 );
* // returns <Float64Array>[ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function dcusumkbn2( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;
	if ( strideX < 0 ) {
		offsetX += (N-1) * strideX;
	}
	if ( strideY < 0 ) {
		offsetY += (N-1) * strideY;
	}
	viewX = new Float64Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewY = new Float64Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*offsetY), y.length-offsetY ); // eslint-disable-line max-len
	addon( N, sum, viewX, strideX, viewY, strideY );
	return y;
}


// EXPORTS //

module.exports = dcusumkbn2;
