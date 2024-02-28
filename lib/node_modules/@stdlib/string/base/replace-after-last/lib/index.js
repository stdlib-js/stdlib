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
* Replace the substring after the last occurrence of a specified search string.
*
* @module @stdlib/string/base/replace-after-last
*
* @example
* var replaceAfterLast = require( '@stdlib/string/base/replace-after-last' );
*
* var str = 'beep boop';
*
* var out = replaceAfterLast( str, ' ', 'foo', str.length );
* // returns 'beep foo'
*
* out = replaceAfterLast( str, 'o', 'bar', str.length );
* // returns 'beep boobar'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
