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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Tests whether a provided value is a valid string field.
*
* @private
* @param {*} value - input value
* @param {string} name - field name
* @returns {(null|TypeError)} error object or null
*/
function isValidNonEmptyString( value, name ) {
	if ( isString( value ) || value.length > 0 ) {
		return null;
	}
	return new TypeError( format( 'invalid argument. `%s` field must be a non-empty string. Value: `%s`.', name, value ) );
}


// EXPORTS //

module.exports = isValidNonEmptyString;
