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

'use strict';

// MAIN //

/**
* Returns a regular expression for matching an incomplete `require` expression for file path completion.
*
* ## Notes
*
* -   The regular expression also includes support for related `require` expressions, such as `rerequire` and `deeprerequire`.
*
* @private
* @returns {RegExp} regular expression
*
* @example
* var RE_REQUIRE = createRegExp();
*
* var bool = RE_REQUIRE.test( 'var foo = require( "foo" );' );
* // returns true
*
* @example
* var RE_REQUIRE = createRegExp();
*
* var bool = RE_REQUIRE.test( 'var foo = require( "./foo.js" );' );
* // returns true
*/
function createRegExp() {
	/*
	* Regular expression for an incomplete `require` expression.
	*
	* ## Examples
	*
	* -   `'require( \'./foo'`
	* -   `'require( \'./foo/bar'`
	* -   `'require( \'./foo/bar/'`
	* -   `'require( \'foo'`
	* -   `'require( \'foo/bar'`
	* -   `'require( \'foo/bar/'`
	* -   `'require( \''`
	* -   `'require( \'.'`
	* -   `'require( \'./'`
	* -   `'require( \'..'`
	* -   `'require( \'../'`
	* -   `'require( \'./../'`
	*
	* Regular expression: `/\b(?:re|deepre|)require\s*\(\s*['"]((?:[\w@./-]+\/)?(?:[\w@./-]*))$/`
	*
	* -   `\b`
	*     -   match a word boundary
	* -   `(?:re|deepre|)`
	*     -   capture, but do not remember, related `require` API prefixes
	* -   `require`
	*     -   match the word `require` exactly
	* -   `\s*`
	*     -   zero or more whitespace characters
	* -   `\(`
	*     -   parenthesis literal
	* -   `\s*`
	*     -   zero or more whitespace characters
	* -   `['"]`
	*     -   either a `'` or a `"` mark
	* -   `(`
	*     -   begin capture (1)
	* -   `(?:[\w@./-]+\/)`
	*     -   capture, but do not remember, one or more path characters followed by a forward slash (2)
	* -   `?`
	*     -   match zero or one time
	* -   `(?:[\w@./-]*)`
	*     -   capture, but do not remember, zero or more path characters (3)
	* -   `)`
	*     -   end capture (1)
	* -   `$`
	*     -   match end of input
	*/
	return /\b(?:re|deepre|)require\s*\(\s*['"]((?:[\w@./-]+\/)?(?:[\w@./-]*))$/;
}


// EXPORTS //

module.exports = createRegExp;
