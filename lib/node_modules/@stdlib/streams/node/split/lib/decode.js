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

var string2buffer = require( '@stdlib/buffer/from-string' );


// MAIN //

/**
* Re-decodes a UTF-8 string according to a specified encoding.
*
* @private
* @param {string} str - UTF-8 string to decode
* @param {string} enc - string encoding
* @returns {string} decoded string
*/
function decode( str, enc ) {
	// Check if we need to re-decode the string to something other than 'utf8'...
	if ( enc === 'utf8' || enc === 'buffer' ) {
		return str;
	}
	str = string2buffer( str );
	if ( enc ) {
		return str.toString( enc );
	}
	return str.toString();
}


// EXPORTS //

module.exports = decode;
