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

var defineProperties = require( './define_properties.js' );


// MAIN //

/**
* Tests for `Object.defineProperties` support.
*
* @returns {boolean} boolean indicating if an environment has `Object.defineProperties` support
*
* @example
* var bool = hasDefinePropertiesSupport();
* // returns <boolean>
*/
function hasDefinePropertiesSupport() {
	// Test basic support...
	try {
		defineProperties( {}, {
			'x': {}
		});
		return true;
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return false;
	}
}


// EXPORTS //

module.exports = hasDefinePropertiesSupport;
