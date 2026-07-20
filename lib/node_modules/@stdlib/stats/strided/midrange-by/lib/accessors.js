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

'use strict';

// MODULES //

var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the mid-range of a strided array via a callback function.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback
* @param {*} [thisArg] - execution context
* @returns {number} mid-range
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = midrangeBy( x.length, arraylike2object( x ), 1, 0, accessor );
* // returns -1.0
*/
function midrangeBy( N, x, strideX, offsetX, clbk, thisArg ) {
	var xbuf;
	var get;
	var max;
	var min;
	var ix;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		v = clbk.call( thisArg, get( xbuf, offsetX ), 0, offsetX, xbuf );
		if ( v === void 0 || isnan( v ) ) {
			return NaN;
		}
		return v;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		min = clbk.call( thisArg, get( xbuf, ix ), i, ix, xbuf );
		if ( min !== void 0 ) {
			break;
		}
		ix += strideX;
	}
	if ( i === N ) {
		return NaN;
	}
	if ( isnan( min ) ) {
		return min;
	}
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		v = clbk.call( thisArg, get( xbuf, ix ), i, ix, xbuf );
		if ( v === void 0 ) {
			continue;
		}
		if ( isnan( v ) ) {
			return v;
		}
		if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
			min = v;
		} else if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return ( max + min ) / 2.0;
}


// EXPORTS //

module.exports = midrangeBy;
