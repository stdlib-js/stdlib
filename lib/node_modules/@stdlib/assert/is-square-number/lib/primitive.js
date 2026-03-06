/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Tests if a value is a number primitive having a value which is a square number.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number primitive having a value which is a square number
*
* @example
* var bool = isSquareNumber( 4.0 );
* // returns true
*
* @example
* var bool = isSquareNumber( new Number( 4.0 ) );
* // returns false
*/
function isSquareNumber( value ) {
	var n;
	if ( !isInteger( value ) ) {
		return false;
	}
	n = floor( sqrt( value ) + 0.5 );
	return n*n === value;
}


// EXPORTS //

module.exports = isSquareNumber;
