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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Validates `translateX`.
*
* @private
* @param {*} v - value to test
* @returns {(Error|null)} error object or null
*/
function test( v ) {
	if ( !isNonNegativeInteger( v ) ) {
		return new TypeError( 'invalid value. `translateX` must be a nonnegative integer. Value: `' + v + '.`' );
	}
	return null;
}


// EXPORTS //

module.exports = test;
