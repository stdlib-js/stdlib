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

var reWhitespace = require( './main.js' );


// MAIN //

/**
* Matches a white space character.
*
* Regular expression: `/([\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/`
*
* -   `()`
*     -   create a capture group
*
* -   `[]`
*     -   match any one of the listed characters
*
* -   `\u0009`
*     -   character tabulation (horizontal tab; `\t`)
*
* -   `\u000A`
*     -   line feed (LF; `\n`)
*
* -   `\u000B`
*     -   line tabulation (vertical tab; `\v`)
*
* -   `\u000C`
*     -   form feed (`\f`)
*
* -   `\u000D`
*     -   carriage return (CR; `\r`)
*
* -   `\u0020`
*     -   space (most common)
*
* -   `\u0085`
*     -   next line (NEL)
*
* -   `\u00A0`
*     -   non-breaking space
*
* -   `\u1680`
*     -   Ogham space mark
*
* -   `\u2000`
*     -   en quad
*
* -   `\u2001`
*     -   em quad
*
* -   `\u2002`
*     -   en space
*
* -   `\u2003`
*     -   em space
*
* -   `\u2004`
*
*     -   three-per-em space (thick space)
*
* -   `\u2005`
*     -   four-per-em space (mid space)
*
* -   `\u2006`
*     -   six-per-em space
*
* -   `\u2007`
*     -   figure space
*
* -   `\u2008`
*     -   punctuation space
*
* -   `\u2009`
*     -   thin space
*
* -   `\u200A`
*     -   hair space
*
* -   `\u2028`
*     -   line separator
*
* -   `\u2029`
*     -   paragraph separator
*
* -   `\u202F`
*     -   narrow no-break space
*
* -   `\u205F`
*     -   medium mathematical space
*
* -   `\u3000`
*     -   ideographic space
*
* -   `\uFEFF`
*     -   zero width non-breaking space
*
* ## Notes
*
* -   Matches the 25 characters defined as white space ("WSpace=Y","WS") characters in the Unicode 9.0 character database.
* -   Matches one related white space character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).
*
* @constant
* @type {RegExp}
* @default /([\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/
* @see [whitespace]{@link https://en.wikipedia.org/wiki/Whitespace_character}
*/
var REGEXP_CAPTURE = reWhitespace({
	'capture': true
});


// EXPORTS //

module.exports = REGEXP_CAPTURE;
