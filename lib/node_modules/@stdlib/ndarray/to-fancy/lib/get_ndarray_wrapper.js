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
* Returns a wrapper function for processing ndarrays after retrieval.
*
* @private
* @param {Function} ndarray2fancy - function for creating a proxied ndarray
* @param {Object} opts - options
* @param {boolean} opts.strict - boolean indicating whether to perform strict bounds checking
* @param {Function} opts.cache - cache for resolving ndarray index objects
* @returns {Function} wrapper function
*/
function wrapper( ndarray2fancy, opts ) {
	return wrap;

	/**
	* Returns a proxied ndarray.
	*
	* @private
	* @param {ndarray} x - input ndarray
	* @returns {ndarray} proxied ndarray
	*/
	function wrap( x ) {
		return ndarray2fancy( x, opts );
	}
}


// EXPORTS //

module.exports = wrapper;
