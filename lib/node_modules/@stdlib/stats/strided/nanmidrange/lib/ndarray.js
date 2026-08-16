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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the mid-range of a strided array, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} mid-range
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nanmidrange( 5, x, 2, 1 );
* // returns 1.0
*/
function nanmidrange( N, x, strideX, offsetX ) {
	var max;
	var min;
	var ix;
	var o;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX );
	}
	if ( N === 1 || strideX === 0 ) {
		v = x[ offsetX ];
		if ( isnan( v ) ) {
			return NaN;
		}
		return v;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			break;
		}
		ix += strideX;
	}
	if ( i === N ) {
		return NaN;
	}
	min = v;
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		v = x[ ix ];
		if ( isnan( v ) ) {
			continue;
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

module.exports = nanmidrange;
