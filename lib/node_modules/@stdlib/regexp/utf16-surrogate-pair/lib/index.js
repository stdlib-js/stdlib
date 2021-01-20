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

/**
* Return a regular expression to match a UTF-16 surrogate pair.
*
* @module @stdlib/regexp/utf16-surrogate-pair
*
* @example
* var reUtf16SurrogatePair = require( '@stdlib/regexp/utf16-surrogate-pair' );
*
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

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reUtf16SurrogatePair = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reUtf16SurrogatePair, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = reUtf16SurrogatePair;
