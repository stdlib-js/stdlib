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

var reUtf16UnpairedSurrogate = require( './main.js' );


// MAIN //

/**
* Matches an unpaired UTF-16 surrogate.
*
* Regular expression: `/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/`
*
* -   `(?:[^\uD800-\uDBFF]|^)`
*     -   capture but do not remember anything which is not a high surrogate, including nothing
*
* -   `[\uDC00-\uDFFF]`
*     -   match a low surrogate
*
* -   `|`
*     -   OR
*
* -   `[\uD800-\uDBFF]`
*     -   match a high surrogate
*
* -   `(?![\uDC00-\uDFFF])`
*     -   but only accept the previous match if not followed by a low surrogate
*
*
* @constant
* @type {RegExp}
* @default /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/
*/
var RE_UTF16_UNPAIRED_SURROGATE = reUtf16UnpairedSurrogate(); // eslint-disable-line id-length


// EXPORTS //

module.exports = RE_UTF16_UNPAIRED_SURROGATE;
