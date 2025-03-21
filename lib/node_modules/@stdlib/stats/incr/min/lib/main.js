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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a minimum value.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmin();
*
* var min = accumulator();
* // returns null
*
* min = accumulator( 3.14 );
* // returns 3.14
*
* min = accumulator( -5.0 );
* // returns -5.0
*
* min = accumulator( 10.1 );
* // returns -5.0
*
* min = accumulator();
* // returns -5.0
*/
function incrmin() {
	var min;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated minimum value. If not provided a value, the accumulator function returns the current min.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} min value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( min === void 0 ) ? null : min;
		}
		if (
			min === void 0 ||
			x < min ||
			isnan( x ) ||
			( x === min && isNegativeZero( x ) )
		) {
			min = x;
		}
		return min;
	}
}


// EXPORTS //

module.exports = incrmin;
