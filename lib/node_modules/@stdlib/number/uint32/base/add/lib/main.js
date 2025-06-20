/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MAIN //

/**
* Computes the sum of two unsigned 32-bit integers `x` and `y`.
*
* ## Method
*
* -   `>>> 0`: cast each operand to an unsigned 32-bit integer.
* -   `+`: summation is exact as IEEE-754 integer addition of two unsigned 32-bit integers fits inside 53-bit range.
* -   `>>> 0`: keep the low 32 bits.
*
* @param {integer} x - first input value
* @param {integer} y - second input value
* @returns {integer} sum
*
* @example
* var v = add( 1>>>0, 5>>>0 );
* // returns 6
*
* @example
* var v = add( 2>>>0, 5>>>0 );
* // returns 7
*
* @example
* var v = add( 0>>>0, 5>>>0 );
* // returns 5
*/
function add( x, y ) {
	return ( ( x>>>0 ) + ( y>>>0 ) )>>>0; // asm type annotation
}


// EXPORTS //

module.exports = add;
