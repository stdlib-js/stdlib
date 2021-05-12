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

var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes minimum and maximum values.
*
* @param {Collection} [out] - output array
* @throws {TypeError} output argument must be array-like
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrminmax();
*
* var mm = accumulator();
* // returns null
*
* mm = accumulator( 2.0 );
* // returns [ 2.0, 2.0 ]
*
* mm = accumulator( -5.0 );
* // returns [ -5.0, 2.0 ]
*
* mm = accumulator( 3.0 );
* // returns [ -5.0, 3.0 ]
*
* mm = accumulator( 5.0 );
* // returns [ -5.0, 5.0 ]
*
* mm = accumulator();
* // returns [ -5.0, 5.0 ]
*/
function incrminmax( out ) {
	var minmax;
	var min;
	var max;
	var FLG;
	if ( arguments.length === 0 ) {
		minmax = [ 0.0, 0.0 ];
	} else {
		if ( !isArrayLike( out ) ) {
			throw new TypeError( 'invalid argument. Output argument must be an array-like object. Value: `' + out + '`.' );
		}
		minmax = out;
	}
	min = PINF;
	max = NINF;
	FLG = false;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns updated minimum and maximum values. If not provided a value, the accumulator function returns the current minimum and maximum values.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(ArrayLikeObject|null)} output array or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( FLG === false ) {
				return null;
			}
			minmax[ 0 ] = min; // Why? Because we cannot guarantee someone hasn't mutated the output array
			minmax[ 1 ] = max;
			return minmax;
		}
		FLG = true;
		if ( isnan( x ) ) {
			min = x;
			max = x;
		} else {
			if ( x < min || ( x === min && isNegativeZero( x ) ) ) {
				min = x;
			}
			if ( x > max || ( x === max && isPositiveZero( x ) ) ) {
				max = x;
			}
		}
		minmax[ 0 ] = min;
		minmax[ 1 ] = max;
		return minmax;
	}
}


// EXPORTS //

module.exports = incrminmax;
