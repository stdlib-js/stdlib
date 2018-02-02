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

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;


// MAIN //

/**
* Tests if a value is a number primitive that is an odd number.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number primitive that is an odd number
*
* @example
* var bool = isOdd( -5.0 );
* // returns true
*
* @example
* var bool = isOdd( new Number( -5.0 ) );
* // returns false
*/
function isOdd( value ) {
	if ( !isInteger( value ) ) {
		return false;
	}
	// Check sign to prevent overflow...
	if ( value > 0.0 ) {
		return isEven( value-1.0 );
	}
	return isEven( value+1.0 );
}


// EXPORTS //

module.exports = isOdd;
