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
* Tests if a value is a Windows absolute path.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a Windows absolute path
*
* @example
* var bool = isAbsolutePath( 'C:\\foo\\bar\\baz' );
* // returns true
*
* @example
* var bool = isAbsolutePath( 'foo\\bar\\baz' );
* // returns false
*/
function isAbsolutePath( value ) {
	var code;
	var len;
	if ( !isString( value ) ) {
		return false;
	}
	len = value.length;
	if ( len === 0 ) {
		return false;
	}
	code = value.charCodeAt( 0 );

	// Check if the string begins with either a forward '/' or backward slash '\\':
	if ( code === 47 || code === 92 ) {
		return true;
	}
	// Check for a device root (e.g., C:\\)...
	if (
		(code >= 65 && code <= 90) || // A-Z
		(code >= 97 && code <= 122)   // a-z
	) {
		// Check if the string has a colon ':' character:
		if ( len > 2 && value.charCodeAt( 1 ) === 58 ) {
			code = value.charCodeAt( 2 );

			// Check for either a forward or backward slash:
			if ( code === 47 || code === 92 ) {
				return true;
			}
		}
	}
	return false;
}


// EXPORTS //

module.exports = isAbsolutePath;
