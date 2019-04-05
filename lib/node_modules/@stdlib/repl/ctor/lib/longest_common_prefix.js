/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TODO: move implementation to package: @stdlib/string/longest-common-prefix

'use strict';

// MODULES //

var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Returns the longest common prefix.
*
* ## Notes
*
* -   The algorithmic complexity is `O(M*N)` where `M` is the number of strings and `N` is the length of the first string.
*
* @private
* @param {(string|StringArray)} arg - a string or list of strings
* @param {string} [...str] - strings
* @throws {TypeError} must provide strings
* @returns {string} longest common prefix
*
* @example
* var prefix = longestCommonPrefix( 'beep', 'bebop' );
* // returns 'be'
*
* @example
* var prefix = longestCommonPrefix( [ 'beep', 'bebop' ] );
* // returns 'be'
*/
function longestCommonPrefix() {
	var prefix;
	var list;
	var str;
	var ch;
	var M;
	var N;
	var i;
	var j;

	if ( arguments.length === 1 && isArrayLikeObject( arguments[ 0 ] ) ) {
		list = arguments[ 0 ];
	} else {
		list = [];
		for ( i = 0; i < arguments.length; i++ ) {
			list.push( arguments[ i ] );
		}
	}
	M = list.length;
	if ( M === 0 ) {
		return '';
	}
	prefix = list[ 0 ];
	if ( !isString( prefix ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + prefix + '`.' );
	}
	if ( M === 1 ) {
		return prefix;
	}
	N = prefix.length;
	for ( i = 0; i < N; i++ ) {
		ch = prefix[ i ];
		for ( j = 1; j < M; j++ ) {
			str = list[ j ];
			if ( !isString( str ) ) {
				throw new TypeError( 'invalid argument. Must provide a string. Value: `' + str + '`.' );
			}
			if ( i >= str.length || str[ i ] !== ch ) {
				return prefix.substring( 0, i );
			}
		}
	}
	return prefix;
}


// EXPORTS //

module.exports = longestCommonPrefix;
