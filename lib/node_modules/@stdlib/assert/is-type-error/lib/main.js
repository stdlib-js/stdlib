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

var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var typeOf = require( '@stdlib/utils/type-of' );
var isError = require( '@stdlib/assert/is-error' );


// MAIN //

/**
* Tests if a value is a `TypeError` object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a `TypeError` object
*
* @example
* var bool = isTypeError( new TypeError( 'beep' ) );
* // returns true
*
* @example
* var bool = isTypeError( {} );
* // returns false
*/
function isTypeError( value ) {
	if ( typeof value !== 'object' || value === null ) {
		return false;
	}
	// Check for `TypeError` objects from the same realm (same Node.js `vm` or same `Window` object)...
	if ( value instanceof TypeError ) {
		return true;
	}
	// All `TypeError` objects are `Error` objects...
	if ( isError( value ) ) {
		// Walk the prototype tree until we find the desired constructor...
		while ( value ) {
			if ( typeOf( value ) === 'typeerror' ) {
				return true;
			}
			value = getPrototypeOf( value );
		}
	}
	return false;
}


// EXPORTS //

module.exports = isTypeError;
