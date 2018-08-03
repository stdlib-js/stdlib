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
* If a function does not throw, returns the function return value; otherwise, returns `y`.
*
* @param {Function} x - function to try invoking
* @param {*} y - value to return if a function throws
* @throws {TypeError} first argument must be a function
* @returns {*} either the return value of `x` or the provided argument `y`
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
*
* function x() {
*     if ( randu() < 0.5 ) {
*         throw new Error( 'beep' );
*     }
*     return 1.0;
* }
* var z = trycatch( x, -1.0 );
* // returns <number>
*/
function trycatch( x, y ) {
	if ( !isFunction( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+x+'`.' );
	}
	try {
		return x();
	} catch ( error ) { // eslint-disable-line no-unused-vars
		return y;
	}
}


// EXPORTS //

module.exports = trycatch;
