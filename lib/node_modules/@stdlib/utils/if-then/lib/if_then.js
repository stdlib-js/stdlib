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

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* If a condition is truthy, invokes `x`; otherwise, invokes `y`.
*
* @param {boolean} bool - condition
* @param {Function} x - function to invoke if a condition is truthy
* @param {Function} y - function to invoke if a condition is falsy
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @returns {*} return value of either `x` or `y`
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* function x() {
*     return randu() * 100.0;
* }
*
* function y() {
*     return -1.0 * randu() * 100.0;
* }
*
* var z = ifthen( randu() > 0.5, x, y );
* // returns <number>
*/
function ifthen( bool, x, y ) {
	if ( !isFunction( x ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+x+'`.' );
	}
	if ( !isFunction( y ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+y+'`.' );
	}
	if ( bool ) {
		return x();
	}
	return y();
}


// EXPORTS //

module.exports = ifthen;
