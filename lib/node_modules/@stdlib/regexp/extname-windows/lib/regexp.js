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

var reExtnameWindows = require( './main.js' );


// MAIN //

/**
* Captures a Windows filename extension. Modified from Node.js [source][1].
*
* -   `^`
*     -   match any string which begins with
*
* -   `(?:)`
*     -   capture but do not remember (device)
*
* -   `[a-zA-Z]:`
*     -   match any upper or lowercase letter and a `:` literal
*
* -   `|`
*     -   OR
*
* -   `[\\\/]`
*     -   match a `\` or `/` literal character
*
* -   `{2}`
*     -   exactly two times
*
* -   `[^\\\/]+`
*     -   match anything but a `\` or `/` literal one or more times
*
* -   `[\\\/]+`
*     -   match a `\` or `/` literal one or more times
*
* -   `[^\\\/]+`
*     -   match anything but a `\` or `/` literal one or more times
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (slash)
*
* -   `[\\\/]`
*     -   match a `\` or `/` literal
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (dirname)
*
* -   `[\s\S]`
*     -   match any space or non-space character
*
* -   `*?`
*     -   zero or more times but do so non-greedily
*
* -   `(?:)`
*     -   capture but do not remember (basename)
*
* -   `(?:)`
*     -   capture but do not remember
*
* -   `\.{1,2}`
*     -   match a `.` literal one or two times
*
* -   `|`
*     -   OR
*
* -   `[^\\\/]+?`
*     -   match anything but a `\` or `/` literal one or more times, but do so non-greedily
*
* -   `|)`
*     -   OR capture nothing
*
* -   `()`
*     -   capture (extname)
*
* -   `\.`
*     -   match a `.` literal
*
* -   `[^.\/\\]*`
*     -   match anything but a `.`, `/`, or `\` literal zero or more times
*
* -   `|)`
*     -   OR capture nothing
*
* -   `(?:)`
*     -   capture but do not remember (trailing slash)
*
* -   `[\\\/]*`
*     -   match a `\` or `/` literal zero or more times
*
* -   `$`
*     -   end of string
*
* [1]: https://github.com/nodejs/node/blob/1a3b295d0f46b2189bd853800b1e63ab4d106b66/lib/path.js#L65
*
* @constant
* @type {RegExp}
* @default /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/
*/
var RE_EXTNAME_WINDOWS = reExtnameWindows();


// EXPORTS //

module.exports = RE_EXTNAME_WINDOWS;
