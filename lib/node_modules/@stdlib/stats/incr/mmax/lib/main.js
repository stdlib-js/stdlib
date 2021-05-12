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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving maximum value.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmax( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0 );
* // returns 2.0
*
* m = accumulator( -5.0 );
* // returns 2.0
*
* m = accumulator( 3.0 );
* // returns 3.0
*
* m = accumulator( 5.0 );
* // returns 5.0
*
* m = accumulator();
* // returns 5.0
*/
function incrmmax( W ) {
	var buf;
	var max;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	max = NINF;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated maximum. If not provided a value, the accumulator function returns the current maximum.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} maximum value or null
	*/
	function accumulator( x ) {
		var v;
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return max;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: update initial window...
		if ( N < W ) {
			N += 1;
			if (
				isnan( x ) ||
				x > max ||
				( x === max && isPositiveZero( x ) )
			) {
				max = x;
			}
		}
		// Case: incoming value is NaN or greater than current maximum value...
		else if ( isnan( x ) || x > max ) {
			max = x;
		}
		// Case: outgoing value is the current maximum and the new value is less than the maximum, and, thus, we need to find a new maximum among the current values...
		else if ( ( buf[ i ] === max && x < max ) || isnan( buf[ i ] ) ) {
			max = x;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					v = buf[ k ];
					if ( isnan( v ) ) {
						max = v;
						break; // no need to continue searching
					}
					if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
						max = v;
					}
				}
			}
		}
		// Case: outgoing value is the current maximum, which is zero, and the new value is also zero, and, thus, we need to correctly handle signed zeros...
		else if ( buf[ i ] === max && x === max && x === 0.0 ) {
			if ( isPositiveZero( x ) ) {
				max = x;
			} else if ( isPositiveZero( buf[ i ] ) ) {
				// Because the outgoing and incoming are different signs (+,-), we need to search the buffer to see if it contains a positive zero. If so, the maximum value remains positive zero; otherwise, the maximum value is incoming value...
				max = x;
				for ( k = 0; k < W; k++ ) {
					if ( k !== i && isPositiveZero( buf[ k ] ) ) {
						max = buf[ k ];
						break;
					}
				}
			}
			// Case: the outgoing and incoming values are both negative zero, so nothing changes
		}
		// Case: updating existing window; however, the maximum value does not change so nothing to do but update our buffer...

		buf[ i ] = x;
		return max;
	}
}


// EXPORTS //

module.exports = incrmmax;
