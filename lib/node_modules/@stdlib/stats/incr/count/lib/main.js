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

/**
* Returns an accumulator function which incrementally updates a count.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrcount();
*
* var count = accumulator();
* // returns 0
*
* count = accumulator( 2.0 );
* // returns 1
*
* count = accumulator( -5.0 );
* // returns 2
*
* count = accumulator();
* // returns 2
*/
function incrcount() {
	var count = 0;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated count. If not provided a value, the accumulator function returns the current count.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {number} count
	*/
	function accumulator() {
		if ( arguments.length === 0 ) {
			return count;
		}
		count += 1;
		return count;
	}
}


// EXPORTS //

module.exports = incrcount;
