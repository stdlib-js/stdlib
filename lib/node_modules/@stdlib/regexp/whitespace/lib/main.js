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

var validate = require( './validate.js' );


// VARIABLES //

var REGEXP_STRING = '[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]';


// MAIN //

/**
* Returns a regular expression to match a white space character.
*
* @param {Options} [options] - function options
* @param {string} [options.flags=''] - regular expression flags
* @param {boolean} [options.capture=false] - boolean indicating whether to wrap a regular expression matching white space characters with a capture group
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {RegExp} regular expression
*
* @example
* var RE_WHITESPACE = reWhitespace();
*
* var bool = RE_WHITESPACE.test( ' ' );
* // returns true
*
* bool = RE_WHITESPACE.test( '\t' );
* // returns true
*
* @example
* var replace = require( '@stdlib/string/replace' );
* var RE_WHITESPACE = reWhitespace({
*     'capture': true
* });
*
* var str = 'Duplicate capture';
* var out = replace( str, RE_WHITESPACE, '$1$1' );
* // returns 'Duplicate  capture'
*/
function reWhitespace( options ) {
	var opts;
	var err;
	if ( arguments.length > 0 ) {
		opts = {};
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		if ( opts.capture ) {
			return new RegExp( '('+REGEXP_STRING+')', opts.flags );
		}
		return new RegExp( REGEXP_STRING, opts.flags );
	}
	return /[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/; // eslint-disable-line no-control-regex
}


// EXPORTS //

module.exports = reWhitespace;
