/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var trim = require( './builtin.js' );


// VARIABLES //

var str1 = ' \n\t\r\n\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff';
var str2 = '\u180e';


// MAIN //

/**
* Tests the built-in `String.prototype.trim()` implementation when provided whitespace.
*
* ## Notes
*
* -   For context, see <https://github.com/stdlib-js/stdlib/commit/c3d6458aa08bbd4bd6bf13e3643422f3b2a65dd9>. In short, we can only rely on the built-in `trim` method when it does not consider the Mongolian space separator as whitespace.
*
* @private
* @returns {boolean} boolean indicating whether the built-in implementation returns the expected value
*
* @example
* var b = test();
* // returns <boolean>
*/
function test() {
	return ( trim.call( str1 ) === '' ) && ( trim.call( str2 ) === str2 );
}


// EXPORTS //

module.exports = test;
