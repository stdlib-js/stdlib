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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving mid-range.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmidrange( 3 );
*
* var mr = accumulator();
* // returns null
*
* mr = accumulator( 2.0 );
* // returns 2.0
*
* mr = accumulator( -5.0 );
* // returns -1.5
*
* mr = accumulator( 3.0 );
* // returns -1.0
*
* mr = accumulator( 5.0 );
* // returns 0.0
*
* mr = accumulator();
* // returns 0.0
*/
function incrmmidrange( W ) {
	var buf;
	var min;
	var max;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	min = PINF;
	max = NINF;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mid-range. If not provided a value, the accumulator function returns the current mid-range.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} mid-range or null
	*/
	function accumulator( x ) {
		var v;
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return ( max+min ) / 2.0;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		if ( x === 0.0 ) {
			x = 0.0; // normalizes +-0
		}
		// Case: incoming value is NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			min = x;
			max = x;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			if ( x < min ) {
				min = x;
			}
			if ( x > max ) {
				max = x;
			}
		}
		// Case: outgoing value is the current minimum or maximum and the new value is either greater than the minimum or less than the maximum, and, thus, we need to find new accumulated values among the current buffer values...
		else if (
			( buf[ i ] === min && x > min ) ||
			( buf[ i ] === max && x < max ) ||
			isnan( buf[ i ] )
		) {
			min = x;
			max = x;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					v = buf[ k ];
					if ( isnan( v ) ) {
						min = v;
						max = v;
						break; // no need to continue searching
					}
					if ( v < min ) {
						min = v;
					}
					if ( v > max ) {
						max = v;
					}
				}
			}
		}
		// Case: incoming value is less than current minimum value...
		else if ( x < min ) {
			min = x;
		}
		// Case: incoming value is greater than current maximum value...
		else if ( x > max ) {
			max = x;
		}
		// Case: updating existing window; however, the minimum and maximum values do not change so nothing to do but update our buffer...
		buf[ i ] = x;

		return ( max+min ) / 2.0;
	}
}


// EXPORTS //

module.exports = incrmmidrange;
