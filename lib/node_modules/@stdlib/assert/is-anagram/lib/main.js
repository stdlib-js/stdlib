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

var lowercase = require( '@stdlib/string/lowercase' );
var replace = require( '@stdlib/string/replace' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var RE_NON_ALPHANUMERIC = /[^a-z0-9]/g;


// FUNCTIONS //

/**
* Comparator function for sorting characters in ascending order.
*
* @private
* @param {string} a - character
* @param {string} b - character
* @returns {number} comparison value
*/
function ascending( a, b ) {
	if ( a < b ) {
		return -1;
	}
	if ( a === b ) {
		return 0;
	}
	return 1;
}


// MAIN //

/**
* Tests if a value is an anagram.
*
* @param {string} str - comparison string
* @param {*} x - value to test
* @throws {TypeError} first argument must be a string primitive
* @returns {boolean} boolean indicating if a value is an anagram
*
* @example
* var bool = isAnagram( 'I am a weakish speller', 'William Shakespeare' );
* // returns true
*
* @example
* var bool = isAnagram( 'bat', 'tabba' );
* // returns false
*/
function isAnagram( str, x ) {
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( !isString( x ) ) {
		return false;
	}
	str = lowercase( str );
	str = replace( str, RE_NON_ALPHANUMERIC, '' );
	x = lowercase( x );
	x = replace( x, RE_NON_ALPHANUMERIC, '' );
	if ( str.length !== x.length ) {
		return false;
	}
	str = str.split( '' )
		.sort( ascending )
		.join( '' );
	x = x.split( '' )
		.sort( ascending )
		.join( '' );
	return ( str === x );
}


// EXPORTS //

module.exports = isAnagram;
