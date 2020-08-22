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

var isStringArray = require( '@stdlib/assert/is-string-array' );
var uppercase = require( '@stdlib/string/uppercase' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var tokenize = require( '@stdlib/nlp/tokenize' );


// MAIN //

/**
* Removes a list of words from a string.
*
* @param {string} str - input string
* @param {StringArray} words - array of words to be removed
* @param {boolean} [ignoreCase=false] - boolean indicating whether to perform a case-insensitive operation
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be an array of strings
* @throws {TypeError} third argument must be a boolean primitive
* @returns {string} output string
*
* @example
* var str = 'beep boop Foo bar';
* var out = removeWords( str, [ 'boop', 'foo' ] );
* // returns 'beep  Foo bar'
*
* @example
* var str = 'beep boop Foo bar';
* var out = removeWords( str, [ 'boop', 'foo' ], true );
* // returns 'beep   bar'
*/
function removeWords( str, words, ignoreCase ) {
	var tokens;
	var token;
	var list;
	var flg;
	var out;
	var N;
	var i;
	var j;

	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( !isStringArray( words ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array of strings. Value: `' + words + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isBoolean( ignoreCase ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a boolean primitive. Value: `' + ignoreCase + '`.' );
		}
	}
	tokens = tokenize( str, true );
	N = words.length;
	out = [];
	if ( ignoreCase ) {
		list = words.slice();
		for ( i = 0; i < N; i++ ) {
			list[ i ] = uppercase( list[ i ] );
		}
		for ( i = 0; i < tokens.length; i++ ) {
			flg = true;
			token = uppercase( tokens[ i ] );
			for ( j = 0; j < N; j++ ) {
				if ( list[ j ] === token ) {
					flg = false;
					break;
				}
			}
			if ( flg ) {
				out.push( tokens[ i ] );
			}
		}
		return out.join( '' );
	}
	// Case: case-sensitive
	for ( i = 0; i < tokens.length; i++ ) {
		token = tokens[ i ];
		flg = true;
		for ( j = 0; j < N; j++ ) {
			if ( words[ j ] === token ) {
				flg = false;
				break;
			}
		}
		if ( flg ) {
			out.push( token );
		}
	}
	return out.join( '' );
}


// EXPORTS //

module.exports = removeWords;
