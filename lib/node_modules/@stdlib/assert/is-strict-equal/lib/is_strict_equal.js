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

// MAIN //

/**
* Tests if two arguments are strictly equal.
*
* ## Notes
*
* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable.
*
*
* @param {*} a - first input value
* @param {*} b - second input value
* @returns {boolean} boolean indicating whether two arguments are strictly equal
*
* @example
* var bool = isStrictEqual( true, true );
* // returns true
*
* @example
* var bool = isStrictEqual( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isStrictEqual( {}, {} );
* // returns false
*
* @example
* var bool = isStrictEqual( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isStrictEqual( -0.0, 0.0 );
* // returns false
*
* @example
* var bool = isStrictEqual( NaN, NaN );
* // returns false
*
* @example
* var bool = isStrictEqual( [], [] );
* // returns false
*/
function isStrictEqual( a, b ) {
	if ( a === b ) {
		if ( a === 0.0 ) {
			return 1.0 / a === 1.0 / b; // handles +-0
		}
		return true;
	}
	return false;
}


// EXPORTS //

module.exports = isStrictEqual;
