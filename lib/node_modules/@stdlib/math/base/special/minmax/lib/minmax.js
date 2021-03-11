/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// MAIN //

/**
* Returns the minimum and maximum values.
*
* @private
* @param {(Array|TypedArray|Object)} out - output object
* @param {number} x - first number
* @param {number} [y] - second number
* @param {...number} [args] - numbers
* @returns {(Array|TypedArray|Object)} minimum and maximum values
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, 5.9, 3.14, 4.2 );
* // returns [ 3.14, 5.9 ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*/
function minmax( out, x, y ) {
	var len;
	var min;
	var max;
	var v;
	var i;

	len = arguments.length;
	if ( len === 2 ) {
		out[ 0 ] = x;
		out[ 1 ] = x;
		return out;
	}
	if ( len === 3 ) {
		if ( isnan( x ) || isnan( y ) ) {
			out[ 0 ] = NaN;
			out[ 1 ] = NaN;
			return out;
		}
		if ( x === y && x === 0.0 ) {
			if ( isNegativeZero( x ) ) {
				out[ 0 ] = x;
				out[ 1 ] = y;
				return out;
			}
			out[ 0 ] = y;
			out[ 1 ] = x;
			return out;
		}
		if ( x < y ) {
			out[ 0 ] = x;
			out[ 1 ] = y;
			return out;
		}
		out[ 0 ] = y;
		out[ 1 ] = x;
		return out;
	}
	min = PINF;
	max = NINF;
	for ( i = 0; i < len; i++ ) {
		v = arguments[ i ];
		if ( isnan( v ) ) {
			out[ 0 ] = NaN;
			out[ 1 ] = NaN;
			return out;
		}
		if ( v < min ) {
			min = v;
		} else if (
			v === 0.0 &&
			v === min &&
			isNegativeZero( v )
		) {
			min = v;
		}
		if ( v > max ) {
			max = v;
		} else if (
			v === 0.0 &&
			v === max &&
			isPositiveZero( v )
		) {
			max = v;
		}
	}
	out[ 0 ] = min;
	out[ 1 ] = max;
	return out;
}


// EXPORTS //

module.exports = minmax;
