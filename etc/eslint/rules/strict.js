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
* ESLint rules for using strict mode.
*
* @namespace rules
*/
var rules = {};

/**
* Always require `use strict` to be used globally.
*
* @name strict
* @memberof rules
* @type {Array}
* @default [ 'error', 'global' ]
* @see [strict]{@link https://eslint.org/docs/rules/strict}
*
* @example
* // Bad...
* function foo() {
*     'use strict';
*     // Do something...
* }
*
* @example
* // Good...
* 'use strict';
* function foo(){
*     // Do something...
* }
*/
rules[ 'strict' ] = [ 'error', 'global' ];


// EXPORTS //

module.exports = rules;
