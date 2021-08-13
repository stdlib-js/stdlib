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
* Test if a value is an arrow function.
*
* @module @stdlib/assert/is-arrow-function
*
* @example
* var isArrowFunction = require( '@stdlib/assert/is-arrow-function' );
*
* var beep = () => 'beep';
*
* var bool = isArrowFunction( beep );
* // returns true

* function boop() {
*     return 'boop';
* }
*
* bool = isArrowFunction( boop );
* // returns false
*/

// MODULES //

var isArrowFunction = require( './main.js' );


// EXPORTS //

module.exports = isArrowFunction;
