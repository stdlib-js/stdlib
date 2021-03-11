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
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving sum.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmsum( 3 );
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 2.0
*
* sum = accumulator( -5.0 );
* // returns -3.0
*
* sum = accumulator( 3.0 );
* // returns 0.0
*
* sum = accumulator( 5.0 );
* // returns 3.0
*
* sum = accumulator();
* // returns 3.0
*/
function incrmsum( W ) {
	var buf;
	var sum;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	sum = 0.0;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sum. If not provided a value, the accumulator function returns the current sum.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} sum or null
	*/
	function accumulator( x ) {
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return sum;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: incoming value is NaN, the accumulated value is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			sum = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			sum += x;
		}
		// Case: outgoing value is NaN, and, thus, we need to compute the accumulated value...
		else if ( isnan( buf[ i ] ) ) {
			N = 1;
			sum = x;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					if ( isnan( buf[ k ] ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						sum = NaN;
						break; // sum is automatically NaN, so no need to continue
					}
					N += 1;
					sum += buf[ k ];
				}
			}
		}
		// Case: neither the current accumulated value nor the incoming value are NaN, so we need to update the accumulated value...
		else if ( isnan( sum ) === false ) {
			sum += x - buf[ i ];
		}
		// Case: the current accumulated value is NaN, so nothing to do until the buffer no longer contains NaN values...

		buf[ i ] = x;
		return sum;
	}
}


// EXPORTS //

module.exports = incrmsum;
