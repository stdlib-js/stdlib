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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Truncates a string to a given length.
*
* @param {string} str - input string
* @param {integer} len - output string length (including ending)
* @param {string} [ending='...] - custom ending
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a string primitive
* @returns {string} truncated string
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 7 );
* // returns 'beep...'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 5, '>>>' );
* // returns 'be>>>'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 10 );
* // returns 'beep boop'
*
* @example
* var str = 'beep boop';
* var out = truncate( str, 0 );
* // returns ''
*/
function truncate( str, len, ending ) {
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer primitive. Value: `' + len + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isString( ending ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a string primitive. Value: `' + ending + '`.' );
		}
	}
	ending = ending || '...';
	if ( str.length <= len ) {
		return str;
	}
	if ( len < ending.length ) {
		return ending.substring( 0, len );
	}
	return str.substr( 0, len-ending.length ) + ending;
}


// EXPORTS //

module.exports = truncate;
