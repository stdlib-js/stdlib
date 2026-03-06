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

// MAIN //

/**
* Regular expression to match a YAML block.
*
* -   `^ {2}`
*     -   match a string beginning with exactly 2 space characters
*
* -   `[\-]{3}`
*     -   match a `-` character occurring 3 times exactly
*
* -   `(?:.|\s)*`
*     -   capture but do not remember any character, including white space characters, which occurs zero or more times
*
* -   `(?:\r?\n)`
*     -   capture but do not remember a newline
*
* -   ` {2}`
*     -   match exactly 2 space characters
*
* -   `[.]{3}`
*     -   match a `.` character occurring 3 times exactly
*
* -   `$`
*     -   end of string
*
* @private
* @constant
* @type {RegExp}
* @default /^ {2}[\-]{3}(?:.|\s)*(?:\r?\n) {2}[.]{3}$/
*/
var RE_YAML_BLOCK = /^ {2}[\-]{3}(?:.|\s)*(?:\r?\n) {2}[.]{3}$/; // eslint-disable-line no-useless-escape


// EXPORTS //

module.exports = RE_YAML_BLOCK;
