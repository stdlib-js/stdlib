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
* Tests if a value is a `URIError` object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a `URIError` object
*
* @example
* var bool = isURIError( new URIError( 'beep' ) );
* // returns true
*
* @example
* var bool = isURIError( {} );
* // returns false
*/
function isURIError( value ) {
	if ( typeof value !== 'object' || value === null ) {
		return false;
	}
	// Check for `URIError` objects from the same realm (same Node.js `vm` or same `Window` object)...
	if ( value instanceof URIError ) {
		return true;
	}
	// All `URIError` objects are `Error` objects...
	if ( isError( value ) ) {
		// Walk the prototype tree until we find the desired constructor...
		while ( value ) {
			if ( typeOf( value ) === 'urierror' ) {
				return true;
			}
			value = getPrototypeOf( value );
		}
	}
	return false;
}


// EXPORTS //

module.exports = isURIError;
