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

// VARIABLES //

var BYTES_PER_ELEMENT = 1; // 1 bytes per uint8


// MAIN //

/**
* Returns a boolean indicating if a value is a `BooleanArray`.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `BooleanArray`
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var bool = isBooleanArray( new BooleanArray( 10 ) );
* // returns true
*
* bool = isBooleanArray( [] );
* // returns false
*/
function isBooleanArray( value ) {
	// Note: the following is not robust and that is intentional. In this case, we are seeking a lower cost way to reasonably determine whether an input value is a `BooleanArray` in order to avoid walking the prototype chain and resolving constructors, which is necessary for robust identification of cross-realm instances. For more robust validation, see `@stdlib/assert/is-booleanarray`.
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'BooleanArray' &&
		value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
	);
}


// EXPORTS //

module.exports = isBooleanArray;
