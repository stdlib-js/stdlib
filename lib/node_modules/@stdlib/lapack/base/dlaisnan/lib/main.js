/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Tests input for NaN by comparing two double-precision floating-point arguments for inequality.
*
* ## Notes
*
* -   This routine exists solely to avoid over-optimization in `disnan`.
*
* @param {number} din1 - first input number
* @param {number} din2 - second input number
* @returns {boolean} boolean indicating whether the arguments are unequal
*
* @example
* var bool = dlaisnan( NaN, NaN );
* // returns true
*
* @example
* var bool = dlaisnan( NaN, 5.0 );
* // returns true
*
* @example
* var bool = dlaisnan( 5.0, 5.0 );
* // returns false
*/
function dlaisnan( din1, din2 ) {
	return ( din1 !== din2 );
}


// EXPORTS //

module.exports = dlaisnan;
