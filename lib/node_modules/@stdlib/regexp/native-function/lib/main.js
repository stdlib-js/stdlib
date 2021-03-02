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
* Returns a regular expression to capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
*
* @returns {RegExp} regular expression
*
* @example
* var RE_NATIVE_FUNCTION = reNativeFunction();
* var bool = RE_NATIVE_FUNCTION.test( Date.toString() );
* // returns true
*/
function reNativeFunction() {
	var str = '';

	// Use a native function as a template:
	str += Function.prototype.toString.call( Function );

	// Escape special RegExp characters:
	str = str.replace( /([.*+?^=!:$(){}|[\]\/\\])/g, '\\$1' ); // eslint-disable-line no-useless-escape

	// Replace any mentions of `Function` to make template generic and replace `for ...` and additional info provided in other environments, such as Rhino.
	str = str.replace( /Function|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?' );

	// Bracket the regular expression:
	str = '^' + str + '$';

	// Create the regular expression:
	return new RegExp( str );
}


// EXPORTS //

module.exports = reNativeFunction;
