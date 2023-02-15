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

var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var ABBRS = require( './abbreviations.json' );
var EMOJIS = require( './emojis.json' );
var CONTRACT = require( './contractions.json' );


// VARIABLES //

var REGEXP_PREFIXES = /^([,([{*<"“'`‘]|\.{1,3})/gi;
var REGEXP_SUFFIXES = /([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;


// FUNCTIONS //

/**
* Extends an array by the elements of another array.
*
* @private
* @param {Array} arr - input array
* @param {Array} ext - array to extend `arr` with
* @returns {Array} mutated input array
*
* @example
* var arr = [ 1, 2, 3 ];
* var out = extend( arr, [ 4, 5 ] );
* // returns [ 1, 2, 3, 4, 5 ]
*/
function extend( arr, ext ) {
	var i;
	for ( i = 0; i < ext.length; i++ ) {
		arr.push( ext[ i ] );
	}
	return arr;
}

/**
* Tokenizes a substring.
*
* @private
* @param {string} substr - input string
* @returns {Array} token array
*
* @example
* var str = '(never)';
* var out = tokenizeSubstring( str );
* // returns [ '(', 'never', ')' ]
*/
function tokenizeSubstring( substr ) {
	var prefixes = [];
	var suffixes = [];
	var match;
	var done;
	var res;

	do {
		if (
			!EMOJIS[ substr ] &&
			!ABBRS[ substr ] &&
			!CONTRACT[ substr ]
		) {
			match = substr.split( REGEXP_PREFIXES );
			if ( match.length > 1 ) {
				prefixes.push( match[ 1 ] );
				substr = match[ 2 ];
			}
			else {
				match = substr.split( REGEXP_SUFFIXES );
				if ( match.length > 1 ) {
					substr = match[ 0 ];
					suffixes.unshift( match[ 1 ] );
				} else {
					done = true;
				}
			}
		}
		else {
			done = true;
		}
	} while ( !done );

	res = prefixes;
	if ( substr ) {
		res.push( substr );
	}

	// If the last suffix is an ellipsis, move it to the front of the suffix array:
	if ( suffixes[ suffixes.length-1 ] === '...' ) {
		suffixes.pop();
		suffixes.unshift( '...' );
	}
	extend( res, suffixes );
	return res;
}


// MAIN //

/**
* Tokenize a string.
*
* @param {string} str - input string
* @param {boolean} [keepWhitespace=false] - boolean indicating whether whitespace characters should be returned as part of the token array
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a boolean
* @returns {Array} array of tokens
*
* @example
* var str = 'Hello World!';
* var out = tokenize( str );
* // returns [ 'Hello', 'World', '!' ]
*
* @example
* var str = '';
* var out = tokenize( str );
* // returns []
*
* @example
* var str = 'Hello Mrs. Maple, could you call me back?';
* var out = tokenize( str );
* // returns [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ]
*/
function tokenize( str, keepWhitespace ) {
	var subtkns;
	var substrs;
	var tokens;
	var substr;
	var cache;
	var i;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( arguments.length > 1 ) {
		if ( !isBoolean( keepWhitespace ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a boolean. Value: `%s`.', keepWhitespace ) );
		}
	}
	if ( !str ) {
		return [];
	}

	// Split on whitespace:
	if ( keepWhitespace ) {
		substrs = str.split( /(\s+)/ );
	} else {
		substrs = str.split( /\s+/ );
	}

	// Set up cache to hold tokens for substring matches:
	cache = {};

	// Initialize token array:
	tokens = [];

	for ( i = 0; i < substrs.length; i++ ) {
		substr = substrs[ i ];
		if ( hasOwnProp( cache, substr ) ) {
			extend( tokens, cache[ substr ] );
		}
		else {
			subtkns = tokenizeSubstring( substr );
			extend( tokens, subtkns );
			cache[ substr ] = subtkns;
		}
	}
	return tokens;
}


// EXPORTS //

module.exports = tokenize;
