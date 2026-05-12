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

var string2buffer = require( '@stdlib/buffer/from-string' );
var RE_NON_ASCII = require( './re_non_ascii.js' );


// MAIN //

/**
* Decodes a string of data which has been encoded using Base64 encoding.
*
* ## Notes
*
* -   Alternative (non-Buffer-based) implementations exist. For example,
*
*     -   jsdom: <https://github.com/jsdom/abab/blob/80874ae1fe1cde2e587bb6e51b6d7c9b42ca1d34/lib/atob.js>
*     -   base64: <https://github.com/mathiasbynens/base64/blob/913b89753d99362855c71c02d04384d1d1a9c2fd/src/base64.js>
*
*     However, having a polyfill is really only required for older Node.js versions `<16.0.0` (see the browser compatibility table at <https://developer.mozilla.org/en-US/docs/Web/API/Window/atob>). Hence, we can use a Node.js-oriented polyfill leveraging `Buffer` with the expectation that bundle size is not an overarching concern.
*
* @private
* @param {string} str - binary string containing base64-encoded data
* @returns {(string|null)} an ASCII string containing decoded data
*
* @example
* var out = atob( 'SGVsbG8sIHdvcmxk' );
* // returns 'Hello, world'
*/
function atob( str ) { // eslint-disable-line stdlib/no-redeclare
	// `atob` only allows converting ASCII characters to Base64, and, when Node.js's `Buffer` tries converting a non-ASCII character, it simply ignores it. Accordingly, we need to explicitly check whether the input string contains non-ASCII characters in order to ensure consistency with the non-polyfilled implementation...
	if ( RE_NON_ASCII.test( str ) ) {
		return null;
	}
	return string2buffer( str, 'base64' ).toString( 'utf8' );
}


// EXPORTS //

module.exports = atob;
