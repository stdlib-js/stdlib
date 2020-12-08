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
var nextGraphemeClusterBreak = require( '@stdlib/string/next-grapheme-cluster-break' );


// MAIN //

/**
* Removes the first character of a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} updated string
*
* @example
* var out = removeFirst( 'last man standing' );
* // returns 'ast man standing'
*
* @example
* var out = removeFirst( 'presidential election' );
* // returns 'residential election'
*
* @example
* var out = removeFirst( 'javaScript' );
* // returns 'avaScript'
*
* @example
* var out = removeFirst( 'Hidden Treasures' );
* // returns 'idden Treasures'
*/
function removeFirst( str ) {
	var nextBreak;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	nextBreak = nextGraphemeClusterBreak( str );

	// Value of `nextBreak` will be -1 if and only if `str` is an empty string or `str` has only 1 extended grapheme cluster...
	if ( str === '' || nextBreak === -1 ) {
		return '';
	}
	return str.substring( nextBreak );
}


// EXPORTS //

module.exports = removeFirst;
