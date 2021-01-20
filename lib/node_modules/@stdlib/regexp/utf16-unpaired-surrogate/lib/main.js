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
* Returns a regular expression to match a UTF-16 unpaired surrogate.
*
* @returns {RegExp} regular expression
*
* @example
* var RE_UTF16_UNPAIRED_SURROGATE = reUtf16UnpairedSurrogate();
*
* var bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uD800' );
* // returns true
*
* bool = RE_UTF16_UNPAIRED_SURROGATE.test( '\uDC00' );
* // returns true
*
* bool = RE_UTF16_UNPAIRED_SURROGATE.test( 'abc' );
* // returns false
*/
function reUtf16UnpairedSurrogate() {
	return /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/;
}


// EXPORTS //

module.exports = reUtf16UnpairedSurrogate;
