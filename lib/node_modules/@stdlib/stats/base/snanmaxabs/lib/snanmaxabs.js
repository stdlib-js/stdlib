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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} maximum absolute value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var N = x.length;
*
* var v = snanmaxabs( N, x, 1 );
* // returns 2.0
*/
function snanmaxabs( N, x, stride ) {
	var max;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return abs( x[ 0 ] );
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			break;
		}
		ix += stride;
	}
	if ( i === N ) {
		return NaN;
	}
	max = abs( v );
	i += 1;
	for ( i; i < N; i++ ) {
		ix += stride;
		v = abs( x[ ix ] );
		if ( isnanf( v ) ) {
			continue;
		}
		if ( v > max ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = snanmaxabs;
