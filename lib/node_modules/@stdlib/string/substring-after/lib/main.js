/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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


// MAIN //

/**
* Returns the part of a string after a specified substring.
*
* @param {string} str - input string
* @param {string} search - search string
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a string primitive
* @returns {string} substring
*
* @example
* var out = substringAfter( 'Hello, world!', ', ' );
* // returns 'world!'
*
* @example
* var out = substringAfter( 'beep boop', 'beep' );
* // returns ' boop'
*
* @example
* var out = substringAfter( 'beep boop', 'boop' );
* // returns ''
*
* @example
* var out = substringAfter( 'beep boop', 'xyz' );
* // returns ''
*/
function substringAfter( str, search ) {
	var idx;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( !isString( search ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a string primitive. Value: `' + search + '`.' );
	}
	idx = str.indexOf( search );
	if ( idx === -1 ) {
		return '';
	}
	return str.substring( idx+search.length );
}


// EXPORTS //

module.exports = substringAfter;
