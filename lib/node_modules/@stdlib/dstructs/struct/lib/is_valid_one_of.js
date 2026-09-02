/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a function for testing whether a provided value is a valid enumerated field.
*
* @private
* @param {Collection} values - list of possible values
* @returns {Function} output function
*/
function isValidOneOf( values ) {
	return isValid;

	/**
	* Tests whether a provided value is a valid enumerated field.
	*
	* @private
	* @param {*} value - input value
	* @param {string} name - field name
	* @returns {(null|TypeError)} error object or null
	*/
	function isValid( value, name ) {
		if ( contains( values, value ) ) {
			return null;
		}
		return new TypeError( format( 'invalid argument. `%s` field must be one of the following: "%s". Value: `%s`.', name, join( values, ', ' ), value ) );
	}
}


// EXPORTS //

module.exports = isValidOneOf;
