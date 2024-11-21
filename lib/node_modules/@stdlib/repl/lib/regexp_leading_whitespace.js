/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Returns a regular expression for matching leading whitespace.
*
* @private
* @returns {RegExp} regular expression
*
* @example
* var RE_LEADING_WHITESPACE = createRegExp();
*
* var bool = RE_LEADING_WHITESPACE.test( '   var x = 3;' );
* // returns true
*/
function createRegExp() {
	/*
	* Regular expression for leading whitespace.
	*
	* Regular expression: `/^\s+/`
	*
	* -   `^`
	*     -   match the start of input
	* -   `\s+`
	*     -   match one or more whitespace characters
	*/
	return /^\s+/;
}


// EXPORTS //

module.exports = createRegExp;
