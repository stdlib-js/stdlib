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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Returns a function which always returns a specified argument.
*
* @param {NonNegativeInteger} idx - argument index
* @throws {TypeError} must provide a nonnegative integer
* @returns {Function} argument function
*
* @example
* var argn = wrap( 1 );
*
* var v = argn( 1.0, 2.0, 3.0 );
* // returns 2.0
*
* v = argn( 'a', 'b', 'c' );
* // returns 'b'
*
* v = argn( null );
* // returns undefined
*/
function wrap( idx ) {
	if ( !isNonNegativeInteger( idx ) ) {
		throw new TypeError( 'invalid argument. Must provide a nonnegative integer. Value: `'+idx+'`.' );
	}
	return argn;

	/**
	* Argument function.
	*
	* @private
	* @returns {*} argument
	*/
	function argn() {
		return arguments[ idx ];
	}
}


// EXPORTS //

module.exports = wrap;
