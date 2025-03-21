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

// MAIN //

/**
* Returns a regular expression to match a UTF-16 surrogate pair.
*
* @returns {RegExp} regular expression
*
* @example
* var RE_UTF16_SURROGATE_PAIR = reUtf16SurrogatePair();
*
* var bool = RE_UTF16_SURROGATE_PAIR.test( '\uD800\uDC00' );
* // returns true
*
* bool = RE_UTF16_SURROGATE_PAIR.test( 'abc\uD800\uDC00def' );
* // returns true
*
* bool = RE_UTF16_SURROGATE_PAIR.test( 'abc' );
* // returns false
*/
function reUtf16SurrogatePair() {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
}


// EXPORTS //

module.exports = reUtf16SurrogatePair;
