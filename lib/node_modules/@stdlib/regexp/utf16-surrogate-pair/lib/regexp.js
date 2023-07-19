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

var reUtf16SurrogatePair = require( './main.js' );


// MAIN //

/**
* Matches a UTF-16 surrogate pair.
*
* Regular expression: `/[\uD800-\uDBFF][\uDC00-\uDFFF]/`
*
* -   `[\uD800-\uDBFF]`
*     -   match a high surrogate
*
* -   `[\uDC00-\uDFFF]`
*     -   match a low surrogate
*
*
* @constant
* @type {RegExp}
* @default /[\uD800-\uDBFF][\uDC00-\uDFFF]/
*/
var RE_UTF16_SURROGATE_PAIR = reUtf16SurrogatePair();


// EXPORTS //

module.exports = RE_UTF16_SURROGATE_PAIR;
