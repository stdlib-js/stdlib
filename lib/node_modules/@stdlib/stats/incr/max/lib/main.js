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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a maximum value.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmax();
*
* var max = accumulator();
* // returns null
*
* max = accumulator( 3.14 );
* // returns 3.14
*
* max = accumulator( -5.0 );
* // returns 3.14
*
* max = accumulator( 10.1 );
* // returns 10.1
*
* max = accumulator();
* // returns 10.1
*/
function incrmax() {
	var max;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated maximum value. If not provided a value, the accumulator function returns the current max.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} max value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( max === void 0 ) ? null : max;
		}
		if (
			max === void 0 ||
			x > max ||
			isnan( x ) ||
			( x === max && isPositiveZero( x ) )
		) {
			max = x;
		}
		return max;
	}
}


// EXPORTS //

module.exports = incrmax;
