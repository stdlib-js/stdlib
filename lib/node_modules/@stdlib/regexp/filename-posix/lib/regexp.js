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

var reFilenamePosix = require( './main.js' );


// MAIN //

/**
* Splits a POSIX filename. Extracted from Node.js [source][1].
*
* Regular expression: `/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/`
*
* -   `\^`
*     -   match any string which begins with
*
* -   `()`
*     -   capture (root)
*
* -   `\/?`
*     -   match a `/` literal zero or one time
*
* -   `|)`
*     -   OR capture nothing
*
* -   `()`
*     -   capture (directory)
*
* -   `[\s\S]`
*     -   any space or non-space character
*
* -   `*?`
*     -   zero or more times, but non-greedily (shortest possible match)
*
* -   `()`
*     -   capture (basename)
*
* -   `\.{1,2}`
*     -   match a `.` literal one or two times
*
* -   `|`
*     -   OR
*
* -   `[^\/]+?`
*     -   match anything which is not a `/` literal one or more times, but do so non-greedily
*
* -   `|)`
*     -   OR capture nothing
*
* -   `()`
*     -   capture
*
* -   `\.`
*     -   match a `.` literal
*
* -   `[^.\/]`
*     -   match anything which is not a `.` or `/` literal
*
* -   `*`
*     -   zero or more times
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (trailing slash)
*
* -   `[\/]`
*     -   match a `/` literal
*
* -   `*`
*     -   zero or more times
*
* -   `$`
*     -   end of string
*
* [1]: https://github.com/nodejs/node/blob/1a3b295d0f46b2189bd853800b1e63ab4d106b66/lib/path.js#L406
*
* @constant
* @type {RegExp}
* @default /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
*/
var RE_FILENAME_POSIX = reFilenamePosix();


// EXPORTS //

module.exports = RE_FILENAME_POSIX;
