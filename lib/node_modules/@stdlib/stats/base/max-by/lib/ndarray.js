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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );


// MAIN //

/**
* Calculates the maximum value of a strided array via a callback function.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array/collection
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @param {Callback} clbk - callback
* @param {*} [thisArg] - execution context
* @returns {number} maximum value
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = maxBy( x.length, x, 1, 0, accessor );
* // returns 8.0
*/
function maxBy( N, x, stride, offset, clbk, thisArg ) {
	var max;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		v = clbk.call( thisArg, x[ 0 ], 0, 0, x );
		if ( v === void 0 ) {
			return NaN;
		}
		return v;
	}
	ix = offset;
	for ( i = 0; i < N; i++ ) {
		max = clbk.call( thisArg, x[ ix ], i, ix, x );
		if ( max !== void 0 ) {
			break;
		}
		ix += stride;
	}
	if ( i === N ) {
		return NaN;
	}
	i += 1;
	for ( i; i < N; i++ ) {
		ix += stride;
		v = clbk.call( thisArg, x[ ix ], i, ix, x );
		if ( v === void 0 ) {
			continue;
		}
		if ( isnan( v ) ) {
			return v;
		}
		if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = maxBy;
