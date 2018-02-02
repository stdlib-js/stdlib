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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// MAIN //

/**
* Tests if a value is a number primitive equal to positive zero.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number primitive equal to positive zero
*
* @example
* var bool = isPositiveZero( 0.0 );
* // returns true
*
* @example
* var bool = isPositiveZero( new Number( 0.0 ) );
* // returns false
*/
function isPositiveZero( value ) {
	return (
		isNumber( value ) &&
		( 1.0 / value ) === PINF
	);
}


// EXPORTS //

module.exports = isPositiveZero;
