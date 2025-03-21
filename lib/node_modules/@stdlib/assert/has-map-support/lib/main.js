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

var GlobalMap = require( './map.js' );


// MAIN //

/**
* Tests for native `Map` support.
*
* @returns {boolean} boolean indicating if an environment has `Map` support
*
* @example
* var bool = hasMapSupport();
* // returns <boolean>
*/
function hasMapSupport() {
	var bool;
	var key;
	var map;

	if ( typeof GlobalMap !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		key = {};
		map = new GlobalMap();
		map.set( key, 'beep' );
		bool = (
			map.has( key ) &&
			map.get( key ) === 'beep'
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasMapSupport;
