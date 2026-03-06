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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;


// MAIN //

/**
* Returns a function to get a symbol's size.
*
* @private
* @returns {Function} size accessor
*/
function get() {
	/* eslint-disable no-invalid-this */
	var self = this;
	if ( isNumber( this._size ) ) {
		return size;
	}
	return this._size;

	/**
	* Returns the size.
	*
	* @private
	* @returns {number} size
	*/
	function size() {
		return self._size; // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = get;
