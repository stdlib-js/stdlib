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

var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes moving minimum and maximum values.
*
* @private
* @param {Collection} out - output array
* @param {PositiveInteger} W - window size
* @param {Collection} buf - data buffer
* @returns {Function} accumulator function
*
* @example
* var buf = [ 0.0, 0.0, 0.0 ];
*
* var accumulator = incrmminmax( [ 0.0, 0.0 ], 3, buf );
*
* var mm = accumulator( 2.0, 0 );
* // returns [ 2.0, 2.0 ]
*
* buf[ 0 ] = 2.0;
*
* mm = accumulator( -5.0, 1 );
* // returns [ -5.0, 2.0 ]
*
* buf[ 1 ] = -5.0;
*
* mm = accumulator( 3.0, 2 );
* // returns [ -5.0, 3.0 ]
*
* buf[ 2 ] = 3.0;
*
* mm = accumulator( 5.0, 0 );
* // returns [ -5.0, 5.0 ]
*
* buf[ 0 ] = 5.0;
*/
function incrmminmax( out, W, buf ) {
	var min;
	var max;
	var N;

	min = PINF;
	max = NINF;
	N = 0;

	return accumulator;

	/**
	* Updates accumulator state.
	*
	* @private
	* @param {number} x - input value
	* @param {NonNegativeInteger} i - buffer index
	* @returns {Collection} output array
	*/
	function accumulator( x, i ) {
		var sgn;
		var v;
		var k;

		// Case: incoming value is NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			min = x;
			max = x;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			if ( x < min || ( x === min && isNegativeZero( x ) ) ) {
				min = x;
			}
			if ( x > max || ( x === max && isPositiveZero( x ) ) ) {
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
					if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
						min = v;
					}
					if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
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
		// Case: incoming value is zero, which means we need to be careful and correctly handle signed zeros...
		else if ( x === 0.0 ) {
			sgn = isNegativeZero( x );
			if ( x === min ) {
				// Case: outgoing value is the current minimum...
				if (
					buf[ i ] === min &&
					isNegativeZero( buf[ i ] ) &&
					sgn === false
				) {
					// Because the outgoing and incoming are different signs (-,+), we need to search the buffer to see if it contains a negative zero. If so, the minimum value remains negative zero; otherwise, the minimum value is incoming value...
					min = x;
					for ( k = 0; k < W; k++ ) {
						if ( k !== i && isNegativeZero( buf[ k ] ) ) {
							min = buf[ k ];
							break;
						}
					}
				} else if ( sgn ) {
					// Ensure minimum value has the correct sign:
					min = x;
				}
			}
			if ( x === max ) {
				// Case: outgoing value is the current maximum...
				if (
					buf[ i ] === max &&
					isPositiveZero( buf[ i ] ) &&
					sgn
				) {
					// Because the outgoing and incoming are different signs (+,-), we need to search the buffer to see if it contains a positive zero. If so, the maximum value remains positive zero; otherwise, the maximum value is incoming value...
					max = x;
					for ( k = 0; k < W; k++ ) {
						if ( k !== i && isPositiveZero( buf[ k ] ) ) {
							max = buf[ k ];
							break;
						}
					}
				} else if ( sgn === false ) {
					// Ensure maximum value has the correct sign:
					max = x;
				}
			}
		}
		// Case: updating existing window; however, the minimum and maximum values do not change so nothing to do...

		out[ 0 ] = min;
		out[ 1 ] = max;
		return out;
	}
}


// EXPORTS //

module.exports = incrmminmax;
