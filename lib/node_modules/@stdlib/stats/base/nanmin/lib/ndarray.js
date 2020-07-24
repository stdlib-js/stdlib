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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );


// MAIN //

/**
* Computes the minimum value of a strided array, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} minimum value
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var N = floor( x.length / 2 );
*
* var v = nanmin( N, x, 2, 1 );
* // returns -2.0
*/
function nanmin( N, x, stride, offset ) {
	var min;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ offset ];
	}
	ix = offset;
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
	min = v;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += stride;
		v = x[ ix ];
		if ( isnan( v ) ) {
			continue;
		}
		if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
			min = v;
		}
	}
	return min;
}


// EXPORTS //

module.exports = nanmin;
