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

// MAIN //

/**
* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN ] );
* var N = floor( x.length / 2 );
*
* var v = dsnanmeanors( N, x, 2, 1 );
* // returns 1.25
*/
function dsnanmeanors( N, x, stride, offset ) {
	var sum;
	var ix;
	var v;
	var n;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ offset ];
	}
	ix = offset;
	sum = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			sum += v;
			n += 1;
		}
		ix += stride;
	}
	if ( n === 0 ) {
		return NaN;
	}
	return sum / n;
}


// EXPORTS //

module.exports = dsnanmeanors;
