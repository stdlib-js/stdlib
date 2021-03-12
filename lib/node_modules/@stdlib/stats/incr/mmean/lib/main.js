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
* Returns an accumulator function which incrementally computes a moving arithmetic mean.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmean( 3 );
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 2.0
*
* mu = accumulator( -5.0 );
* // returns -1.5
*
* mu = accumulator( 3.0 );
* // returns 0.0
*
* mu = accumulator( 5.0 );
* // returns 1.0
*
* mu = accumulator();
* // returns 1.0
*/
function incrmmean( W ) {
	var delta;
	var buf;
	var mu;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	mu = 0.0;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean. If not provided a value, the accumulator function returns the current mean.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} mean or null
	*/
	function accumulator( x ) {
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return mu;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: incoming value is NaN, the sliding mean is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			mu = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			delta = x - mu;
			mu += delta / N;
		}
		// Case: outgoing value is NaN, and, thus, we need to compute the sample mean...
		else if ( isnan( buf[ i ] ) ) {
			N = 1;
			mu = x;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					if ( isnan( buf[ k ] ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						mu = NaN;
						break; // mean is automatically NaN, so no need to continue
					}
					N += 1;
					delta = buf[ k ] - mu;
					mu += delta / N;
				}
			}
		}
		// Case: neither the current mean nor the incoming value are NaN, so we need to update the sample mean...
		else if ( isnan( mu ) === false ) {
			delta = x - buf[ i ];
			mu += delta / W;
		}
		// Case: the current mean is NaN, so nothing to do until the buffer no longer contains NaN values...

		buf[ i ] = x;
		return mu;
	}
}


// EXPORTS //

module.exports = incrmmean;
