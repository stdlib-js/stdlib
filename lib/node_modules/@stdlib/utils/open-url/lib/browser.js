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

/* global window */

'use strict';

// MODULES //

var isURI = require( '@stdlib/assert/is-uri' );


// MAIN //

/**
* Opens a URL.
*
* @param {string} url - URL to open
* @throws {TypeError} must provide a valid URI
* @returns {Window} `window` object
*
* @example
* var win = openURL( 'https://google.com' );
*/
function openURL( url ) {
	if ( !isURI( url ) ) {
		throw new TypeError( 'invalid input value. Must provide a valid URI. Value: `' + url + '`.' );
	}
	return window.open( url );
}


// EXPORTS //

module.exports = openURL;
