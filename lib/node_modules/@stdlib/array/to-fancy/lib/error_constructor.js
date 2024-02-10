/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isRangeError = require( '@stdlib/assert/is-range-error' );
var isTypeError = require( '@stdlib/assert/is-type-error' );
var isSyntaxError = require( '@stdlib/assert/is-syntax-error' );


// MAIN //

/**
* Returns the error constructor for a provided error object.
*
* @private
* @param {Error} err - error object
* @returns {Function} error constructor
*/
function errConstructor( err ) {
	if ( isRangeError( err ) ) {
		return RangeError;
	}
	if ( isTypeError( err ) ) {
		return TypeError;
	}
	if ( isSyntaxError( err ) ) {
		return SyntaxError;
	}
	return Error;
}


// EXPORTS //

module.exports = errConstructor;
