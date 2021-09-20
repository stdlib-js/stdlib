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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;


// MAIN //

/**
* Returns the part of a string after a specified substring.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {integer} [fromIndex=0] - index at which to start the search
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a string primitive
* @throws {TypeError} third argument must be an integer primitive
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
*
* @example
* var out = substringAfter( 'beep boop', 'beep', 5 );
* // returns ''
*
* @example
* var out = substringAfter( 'beep boop beep baz', 'beep', 5 );
* // returns ' baz'
*/
function substringAfter( str, search, fromIndex ) {
	var idx;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( !isString( search ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a string primitive. Value: `' + search + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isInteger( fromIndex ) ) {
			throw new TypeError( 'invalid argument. Third argument must be an integer primitive. Value: `' + fromIndex + '`.' );
		}
		idx = str.indexOf( search, fromIndex );
	} else {
		idx = str.indexOf( search );
	}
	if ( idx === -1 ) {
		return '';
	}
	return str.substring( idx+search.length );
}


// EXPORTS //

module.exports = substringAfter;
