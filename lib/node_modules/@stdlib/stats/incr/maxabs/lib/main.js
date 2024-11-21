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

var abs = require( '@stdlib/math/base/special/abs' );
var incrmax = require( '@stdlib/stats/incr/max' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a maximum absolute value.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmaxabs();
*
* var max = accumulator();
* // returns null
*
* max = accumulator( 3.14 );
* // returns 3.14
*
* max = accumulator( -5.0 );
* // returns 5.0
*
* max = accumulator( 10.1 );
* // returns 10.1
*
* max = accumulator();
* // returns 10.1
*/
function incrmaxabs() {
	var max = incrmax();
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated maximum absolute value. If not provided a value, the accumulator function returns the current maximum absolute value.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} maximum absolute value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return max();
		}
		return max( abs( x ) );
	}
}


// EXPORTS //

module.exports = incrmaxabs;
