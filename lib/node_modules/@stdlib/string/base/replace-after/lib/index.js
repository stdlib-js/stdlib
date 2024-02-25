/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Replace the substring after the first occurrence of a specified search string.
*
* @module @stdlib/string/base/replace-after
*
* @example
* var replaceAfter = require( '@stdlib/string/base/replace-after' );
*
* var str = 'beep boop';
*
* var out = replaceAfter( str, ' ', 'foo', 0 );
* // returns 'beep foo'
*
* out = replaceAfter( str, 'o', 'bar', 0 );
* // returns 'beep bobar'
*
* var out = replaceAfter( 'beep boop', ' ', 'foo', 5 );
* // returns 'beep foo'
*
* var out = replaceAfter( 'beep boop beep baz', 'beep', 'foo', 5 );
* // returns 'beep boop beepfoo'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
