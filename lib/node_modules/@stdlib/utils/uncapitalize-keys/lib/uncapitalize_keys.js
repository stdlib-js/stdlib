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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Converts the first letter of each object key to lowercase.
*
* @param {Object} obj - source object
* @throws {TypeError} must provide an object
* @returns {Object} new object
*
* @example
* var obj1 = {
*     'AA': 1,
*     'BB': 2
* };
*
* var obj2 = uncapitalizeKeys( obj1 );
* // returns { 'aA': 1, 'bB': 2 }
*/
function uncapitalizeKeys( obj ) {
	var out;
	var key;
	var k;
	if ( typeof obj !== 'object' || obj === null ) {
		throw new TypeError( 'invalid argument. Must provide an object. Value: `'+obj+'`.' );
	}
	out = {};
	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			if ( key === '' ) {
				out[ key ] = obj[ key ];
			} else {
				k = key.charAt( 0 ).toLowerCase() + key.slice( 1 );
				out[ k ] = obj[ key ];
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = uncapitalizeKeys;
