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

var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var MIN_SAFE_INTEGER = require( '@stdlib/constants/float64/min-safe-integer' );
var isInteger = require( '@stdlib/math/base/assert/is-integer' );


// MAIN //

/**
* Tests if a finite double-precision floating-point number is a safe integer.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is a safe integer
*
* @example
* var bool = isSafeInteger( 1.0 );
* // returns true
*
* @example
* var bool = isSafeInteger( 2.0e200 );
* // returns false
*
* @example
* var bool = isSafeInteger( 3.14 );
* // returns false
*/
function isSafeInteger( x ) {
	return (
		x >= MIN_SAFE_INTEGER &&
		x <= MAX_SAFE_INTEGER &&
		isInteger( x )
	);
}


// EXPORTS //

module.exports = isSafeInteger;
