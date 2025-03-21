/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Tests if a value is `undefined`.
*
* ## Notes
*
* -   In older browsers, `undefined` is a global which can be overridden. `void`, however, is an operator which **cannot** be overridden. Consequently, better to use `void` to check for `undefined`. See [Stack Overflow][1].
*
* [1]: http://stackoverflow.com/a/19369078/2225624
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is undefined
*
* @example
* var bool = isUndefined( undefined );
* // returns true
*
* bool = isUndefined( null );
* // returns false
*/
function isUndefined( value ) {
	return value === void 0;
}


// EXPORTS //

module.exports = isUndefined;
