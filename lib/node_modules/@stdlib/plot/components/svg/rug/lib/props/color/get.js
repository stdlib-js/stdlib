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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Returns a function to get a color.
*
* @private
* @returns {Function} color accessor
*/
function get() {
	/* eslint-disable no-invalid-this */
	var self = this;
	if ( isString( this._color ) ) {
		return color;
	}
	return this._color;

	/**
	* Returns a color value.
	*
	* @private
	* @returns {string} color
	*/
	function color() {
		return self._color; // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = get;
