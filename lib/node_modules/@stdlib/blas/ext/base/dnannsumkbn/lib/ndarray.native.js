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
var addon = require( './dnannsumkbn.native.js' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - `out` starting index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = new Float64Array( 2 );
*
* var N = floor( x.length / 2 );
*
* var v = dnannsumkbn( N, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 5.0, 4 ]
*/
function dnannsumkbn( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var viewOut;
	var viewX;
	if ( strideX < 0 ) {
		offsetX += (N-1) * strideX;
	}
	if ( strideOut < 0 ) {
		offsetOut += strideOut;
	}
	viewX = new Float64Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewOut = new Float64Array( out.buffer, out.byteOffset+(out.BYTES_PER_ELEMENT*offsetOut), out.length-offsetOut ); // eslint-disable-line max-len
	addon( N, viewX, strideX, viewOut, strideOut );
	return out;
}


// EXPORTS //

module.exports = dnannsumkbn;
