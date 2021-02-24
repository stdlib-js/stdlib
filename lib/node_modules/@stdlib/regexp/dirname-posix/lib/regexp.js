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

var reDirnamePosix = require( './main.js' );


// MAIN //

/**
* Captures a POSIX path dirname. Modified from Node.js [source][1].
*
* Regular expression: `/^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/`
*
* -   `\^`
*     -   match any string which begins with
*
* -   `()`
*     -   capture (includes root and dirname)
*
* -   `(?:)`
*     -   capture but do not remember (handles `'.'` and `'./'` cases)
*
* -   `\.(?![^\/])`
*     -   a `.` literal if the `.` literal is NOT followed by something other than a `/` literal
*
* -   `|`
*     -   OR
*
* -   `(?:)`
*     -   capture but do not remember (handles root+dirname case)
*
* -   `(?:)`
*     -   capture but do not remember (root)
*
* -   `\/?`
*     -   match a `/` literal zero or one time
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (directory)
*
* -   `[\s\S]`
*     -   any space or non-space character
*
* -   `*?`
*     -   zero or more times, but non-greedily (shortest possible match)
*
* -   `(?:)`
*     -   capture but do not remember (slash)
*
* -   `\/+?`
*     -   a `/` literal one or more times, but do so non-greedily
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (basename)
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
* -   `(?:)`
*     -   capture but do not remember (extname)
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
* @default /^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/
*/
var RE_DIRNAME_POSIX = reDirnamePosix();


// EXPORTS //

module.exports = RE_DIRNAME_POSIX;
