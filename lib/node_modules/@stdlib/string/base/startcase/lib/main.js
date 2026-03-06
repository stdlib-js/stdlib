/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var reWhitespace = require( '@stdlib/regexp/whitespace' ).REGEXP;


// MAIN //

/**
* Capitalizes the first letter of each word in an input string.
*
* @param {string} str - string to convert
* @returns {string} start case string
*
* @example
* var str = startcase( 'beep boop foo bar' );
* // returns 'Beep Boop Foo Bar'
*/
function startcase( str ) {
	var cap;
	var out;
	var ch;
	var i;

	cap = true;
	out = '';
	for ( i = 0; i < str.length; i++ ) {
		ch = str.charAt( i );
		if ( reWhitespace.test( ch ) ) {
			cap = true;
		} else if ( cap ) {
			ch = ch.toUpperCase();
			cap = false;
		}
		out += ch;
	}
	return out;
}


// EXPORTS //

module.exports = startcase;
