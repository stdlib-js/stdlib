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
* Replace the substring before the last occurrence of a specified search string.
*
* @module @stdlib/string/base/replace-before-last
*
* @example
* var replaceBeforeLast = require( '@stdlib/string/base/replace-before-last' );
*
* var str = 'beep boop';
*
* var out = replaceBeforeLast( str, ' ', 'foo', str.length );
* // returns 'foo boop'
*
* out = replaceBeforeLast( str, 'o', 'bar', str.length );
* // returns 'barop'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
