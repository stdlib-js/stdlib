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

// VARIABLES //

var isProtoOf = Object.prototype.isPrototypeOf;


// MAIN //

/**
* Tests if an object's prototype chain contains a provided prototype.
*
* @param {*} value - value to test
* @param {(Object|Function)} proto - prototype
* @throws {TypeError} second argument must be an object and not null
* @returns {boolean} boolean indicating if a provided prototype exists in a prototype chain
*
* @example
* var inherit = require( '@stdlib/utils/inherit' );
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
function isPrototypeOf( value, proto ) { // eslint-disable-line stdlib/no-redeclare
	var type = typeof proto;
	if (
		proto === null ||
		(type !== 'object' && type !== 'function')
	) {
		throw new TypeError( 'invalid argument. Second argument must be either an object (except null) or a function. Value: `'+proto+'`.' );
	}
	type = typeof value;
	if (
		value === null ||
		(type !== 'object' && type !== 'function')
	) {
		return false;
	}
	return isProtoOf.call( proto, value );
}


// EXPORTS //

module.exports = isPrototypeOf;
