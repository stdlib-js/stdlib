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

var isArray = require( '@stdlib/assert/is-array' );


// MAIN //

/**
* Returns a function to flatten an array.
*
* @private
* @param {Function} flatten - flatten function
* @returns {Function} wrapped flatten function
*/
function wrap( flatten ) {
	return flattenArray;

	/**
	* Flattens an array.
	*
	* @private
	* @param {Array} arr - array to flatten
	* @throws {TypeError} must provide an array
	* @returns {Array} flattened array
	*/
	function flattenArray( arr ) {
		if ( !isArray( arr ) ) {
			throw new TypeError( 'invalid argument. Must provide an array. Value: `' + arr + '`.' );
		}
		return flatten( arr );
	}
}


// EXPORTS //

module.exports = wrap;
