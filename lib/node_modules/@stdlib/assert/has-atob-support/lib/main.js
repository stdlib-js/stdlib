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

var globalAtob = require( './atob.js' );


// VARIABLES //

var BASE64 = 'SGVsbG8sIHdvcmxk';
var EXPECTED = 'Hello, world';


// MAIN //

/**
* Tests for native `atob` support.
*
* @returns {boolean} boolean indicating if an environment has `atob` support
*
* @example
* var bool = hasAtobSupport();
* // returns <boolean>
*/
function hasAtobSupport() {
	var bool;
	var str;

	if ( typeof globalAtob !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		str = globalAtob( BASE64 );
		bool = ( str === EXPECTED );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasAtobSupport;
