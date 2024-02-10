/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MAIN //

/**
* Returns a wrapper function for processing slices after retrieval.
*
* @private
* @param {Function} array2fancy - function for creating a proxied array
* @param {Object} opts - options
* @param {boolean} opts.strict - boolean indicating whether to perform strict bounds checking
* @returns {Function} wrapper function
*/
function wrapper( array2fancy, opts ) {
	return wrap;

	/**
	* Returns a proxied array.
	*
	* @private
	* @param {Array} x - input array
	* @returns {Array} proxied array
	*/
	function wrap( x ) {
		return array2fancy( x, opts );
	}
}


// EXPORTS //

module.exports = wrapper;
