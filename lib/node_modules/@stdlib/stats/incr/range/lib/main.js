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

var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a range.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrrange();
*
* var range = accumulator();
* // returns null
*
* range = accumulator( 3.14 );
* // returns 0.0
*
* range = accumulator( -5.0 );
* // returns 8.14
*
* range = accumulator( 10.1 );
* // returns 15.1
*
* range = accumulator();
* // returns 15.1
*/
function incrrange() {
	var range;
	var max = NINF;
	var min = PINF;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated range. If not provided a value, the accumulator function returns the current range.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} range or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( range === void 0 ) ? null : range;
		}
		if ( isnan( x ) ) {
			min = x;
			max = x;
		}
		if ( x > max ) {
			max = x;
		}
		if ( x < min ) {
			min = x;
		}
		range = max - min;
		return range;
	}
}


// EXPORTS //

module.exports = incrrange;
