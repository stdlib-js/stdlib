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

/**
* Return a regular expression to match a hexadecimal color.
*
* @module @stdlib/regexp/color-hexadecimal
*
* @example
* var reColorHexadecimal = require( '@stdlib/regexp/color-hexadecimal' );
* var RE_COLOR_HEXADECIMAL = reColorHexadecimal();
*
* var bool = RE_COLOR_HEXADECIMAL.test( '474747' );
* // returns true
*
* bool = RE_COLOR_HEXADECIMAL.test( 'ZZZZZZ' );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reColorHexadecimal = require( './main.js' );


// MAIN //

/**
* Match any `3` or `6` letter character sequence only containing numbers or the letters `A-Fa-f`.
*
* Regular expression: `/^[0-9A-F]{3}$|^[0-9A-F]{6}$/i`
*
* -   `/^`
*     -   match anything that begins with
*
* -   `[0-9A-F]`
*     -   match anything that contains the numbers `0-9` and/or the letters `A-F`
*
* -   `{3}`
*     -   exactly three matched characters
*
* -   `$`
*     -   end of character sequence
*
* -   `|`
*     -   or
*
* -   `^`
*     -   match anything that begins with
*
* -   `[0-9A-F]`
*     -   match anything that contains the numbers `0-9` and/or the letters `A-F`
*
* -   `{6}`
*     -   exactly six matched characters
*
* -   `$`
*     -   end of character sequence
*
* -   `/i`
*     -   ignore case
*
* @constant
* @type {RegExp}
* @default /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i
*/
var RE_COLOR_HEXADECIMAL_EITHER = /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;

// Same as above but only for 3 letter sequences:
var RE_COLOR_HEXADECIMAL_SHORTHAND = /^[0-9A-F]{3}$/i;

// Same as above but only for 6 letter sequences:
var RE_COLOR_HEXADECIMAL = /^[0-9A-F]{6}$/i;


// MAIN //

setReadOnly( reColorHexadecimal, 'REGEXP', RE_COLOR_HEXADECIMAL );
setReadOnly( reColorHexadecimal, 'REGEXP_SHORTHAND', RE_COLOR_HEXADECIMAL_SHORTHAND );
setReadOnly( reColorHexadecimal, 'REGEXP_EITHER', RE_COLOR_HEXADECIMAL_EITHER );


// EXPORTS //

module.exports = reColorHexadecimal;
