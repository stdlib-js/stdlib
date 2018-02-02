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

var toStr = require( './tostring.js' );


// VARIABLES //

var RE = /^Symbol\(.*\)$/;


// MAIN //

/**
* Attempts to call a `Symbol` method.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if able to call a `Symbol` method
*/
function test( value ) {
	try {
		return (
			// Objects created via `Object.create( null )` have no `valueOf()` method:
			typeof value.valueOf() === 'symbol' &&

			// Test output of a non-generic method:
			RE.test( toStr( value ) )
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return false;
	}
}


// EXPORTS //

module.exports = test;
