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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var MAX_ASCII = 127;


// MAIN //

/**
* Tests whether a character belongs to the ASCII character set and whether this is true for all characters in a provided string.
*
* @param {*} x - value to test
* @returns {boolean} boolean indicating if a string has all ASCII characters
*
* @example
* var out = isASCII( 'beep' );
* // returns true
*
* @example
* var out = isASCII( 'È' );
* // returns false
*
* @example
* var out = isASCII( '' );
* // returns false
*
* @example
* var out = isASCII( 123 );
* // returns false
*/
function isASCII( x ) {
	var len;
	var i;
	if ( !isString( x ) ) {
		return false;
	}
	len = x.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( x.charCodeAt( i ) > MAX_ASCII ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = isASCII;
