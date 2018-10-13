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
* Test if an object's prototype chain contains a provided prototype.
*
* @module @stdlib/assert/is-prototype-of
*
* @example
* var inherit = require( '@stdlib/utils/inherit' );
* var isPrototypeOf = require( '@stdlib/assert/is-prototype-of' );
*
* function Foo() {
*     return this;
* }
*
* function Bar() {
*     return this;
* }
* inherit( Bar, Foo );
*
* var bar = new Bar();
*
* var bool = isPrototypeOf( bar, Foo.prototype );
* // returns true
*/

// MODULES //

var isPrototypeOf = require( './main.js' ); // eslint-disable-line stdlib/no-redeclare


// EXPORTS //

module.exports = isPrototypeOf;
