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

// Character codes:
var ZERO = 48;
var NINE = 57;


// MAIN //

/**
* Tests whether a string contains only numeric digits.
*
* @param {*} x - value to test
* @returns {boolean} boolean indicating if a string contains only numeric digits
*
* @example
* var out = isDigitString( '0123456789' );
* // returns true
*
* @example
* var out = isDigitString( '0xffffff' );
* // returns false
*
* @example
* var out = isDigitString( '' );
* // returns false
*
* @example
* var out = isDigitString( 123 );
* // returns false
*/
function isDigitString( x ) {
	var len;
	var ch;
	var i;
	if ( !isString( x ) ) {
		return false;
	}
	len = x.length;
	if ( len === 0 ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		ch = x.charCodeAt( i );
		if ( ch < ZERO || ch > NINE ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = isDigitString;
