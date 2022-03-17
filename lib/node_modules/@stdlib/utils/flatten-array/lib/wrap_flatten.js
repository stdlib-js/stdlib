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

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var format = require( '@stdlib/string/format' );


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
	* @param {ArrayLikeObject} arr - array to flatten
	* @throws {TypeError} must provide an array-like object
	* @returns {Array} flattened array
	*/
	function flattenArray( arr ) {
		if ( !isArrayLikeObject( arr ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an array-like object. Value: `%s`.', arr ) );
		}
		return flatten( arr );
	}
}


// EXPORTS //

module.exports = wrap;
