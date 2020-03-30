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

var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

/**
* Tests if a value is a square triangular number.
*
* ## Notes
*
* -   Return values are not reliable for numbers greater than `1125899906842624`.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a square triangular number
*
* @example
* var bool = isSquareTriangularNumber( 36.0 );
* // returns true
*
* @example
* var bool = isSquareTriangularNumber( new Number( 36.0 ) );
* // returns true
*
* @example
* var bool = isSquareTriangularNumber( 3.14 );
* // returns false
*
* @example
* var bool = isSquareTriangularNumber( -5.0 );
* // returns false
*
* @example
* var bool = isSquareTriangularNumber( null );
* // returns false
*/
function isSquareTriangularNumber( value ) {
	return ( isPrimitive( value ) || isObject( value ) );
}


// EXPORTS //

module.exports = isSquareTriangularNumber;
