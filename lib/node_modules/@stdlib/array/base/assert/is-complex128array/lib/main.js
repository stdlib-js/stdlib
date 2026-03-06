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

var BYTES_PER_ELEMENT = 16; // 8 bytes per float64 x (1 real + 1 imag component)


// MAIN //

/**
* Returns a boolean indicating if a value is a `Complex128Array`.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `Complex128Array`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var bool = isComplex128Array( new Complex128Array( 10 ) );
* // returns true
*
* bool = isComplex128Array( [] );
* // returns false
*/
function isComplex128Array( value ) {
	// Note: the following is not robust and that is intentional. In this case, we are seeking a lower cost way to reasonably determine whether an input value is a `Complex128Array` in order to avoid walking the prototype chain and resolving constructors, which is necessary for robust identification of cross-realm instances. For more robust validation, see `@stdlib/assert/is-complex128array`.
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor.name === 'Complex128Array' &&
		value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT
	);
}


// EXPORTS //

module.exports = isComplex128Array;
