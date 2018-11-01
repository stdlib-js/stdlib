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

var factory = require( './factory.js' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a Poisson distribution with parameter `lambda`.
*
* ## Method
*
* -   When \\(\lambda < 30\\), use Knuth's method.
* -   When \\(lambda \geq 30\\), use transformed rejection method as Knuth's method does not scale well with \\(\lambda\\).
*
* ## References
*
* -   Knuth, Donald E. 1997. _The Art of Computer Programming, Volume 2 (3rd Ed.): Seminumerical Algorithms_. Boston, MA, USA: Addison-Wesley Longman Publishing Co., Inc.
* -   Hörmann, W. 1993. "The transformed rejection method for generating Poisson random variables." _Insurance: Mathematics and Economics_ 12 (1): 39–45. doi:[10.1016/0167-6687(93)90997-4][@hormann:1993b].
*
* [@hormann:1993b]: http://dx.doi.org/10.1016/0167-6687(93)90997-4
*
*
* @name poisson
* @type {PRNG}
* @param {PositiveNumber} lambda - mean
* @returns {NonNegativeInteger} pseudorandom number
*
* @example
* var v = poisson( 0.5 );
* // returns <number>
*
* @example
* var v = poisson( 0.0 );
* // returns NaN
*
* @example
* var v = poisson( NaN );
* // returns NaN
*/
var poisson = factory();


// EXPORTS //

module.exports = poisson;
