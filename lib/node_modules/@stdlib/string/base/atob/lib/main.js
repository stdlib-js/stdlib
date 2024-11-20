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

// MODULES //

var globalAtob = require( './global.js' );


// MAIN //

/**
* Decodes a string of data which has been encoded using Base64 encoding.
*
* @param {string} str - binary string containing base64-encoded data
* @returns {(string|null)} an ASCII string containing decoded data
*
* @example
* var out = atob( 'SGVsbG8sIHdvcmxk' );
* // returns 'Hello, world'
*/
function atob( str ) { // eslint-disable-line stdlib/no-redeclare
	try {
		return globalAtob( str );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return null;
	}
}


// EXPORTS //

module.exports = atob;
