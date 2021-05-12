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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving minimum value.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmin( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0 );
* // returns 2.0
*
* m = accumulator( -5.0 );
* // returns -5.0
*
* m = accumulator( 3.0 );
* // returns -5.0
*
* m = accumulator( 5.0 );
* // returns -5.0
*
* m = accumulator();
* // returns -5.0
*/
function incrmmin( W ) {
	var buf;
	var min;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	min = PINF;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated minimum. If not provided a value, the accumulator function returns the current minimum.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} minimum value or null
	*/
	function accumulator( x ) {
		var v;
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return min;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: update initial window...
		if ( N < W ) {
			N += 1;
			if (
				isnan( x ) ||
				x < min ||
				( x === min && isNegativeZero( x ) )
			) {
				min = x;
			}
		}
		// Case: incoming value is NaN or less than current minimum value...
		else if ( isnan( x ) || x < min ) {
			min = x;
		}
		// Case: outgoing value is the current minimum and the new value is greater than the minimum, and, thus, we need to find a new minimum among the current values...
		else if ( ( buf[ i ] === min && x > min ) || isnan( buf[ i ] ) ) {
			min = x;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					v = buf[ k ];
					if ( isnan( v ) ) {
						min = v;
						break; // no need to continue searching
					}
					if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
						min = v;
					}
				}
			}
		}
		// Case: outgoing value is the current minimum, which is zero, and the new value is also zero, and, thus, we need to correctly handle signed zeros...
		else if ( buf[ i ] === min && x === min && x === 0.0 ) {
			if ( isNegativeZero( x ) ) {
				min = x;
			} else if ( isNegativeZero( buf[ i ] ) ) {
				// Because the outgoing and incoming are different signs (-,+), we need to search the buffer to see if it contains a negative zero. If so, the minimum value remains negative zero; otherwise, the minimum value is incoming value...
				min = x;
				for ( k = 0; k < W; k++ ) {
					if ( k !== i && isNegativeZero( buf[ k ] ) ) {
						min = buf[ k ];
						break;
					}
				}
			}
			// Case: the outgoing and incoming values are both positive zero, so nothing changes
		}
		// Case: updating existing window; however, the minimum value does not change so nothing to do but update our buffer...

		buf[ i ] = x;
		return min;
	}
}


// EXPORTS //

module.exports = incrmmin;
