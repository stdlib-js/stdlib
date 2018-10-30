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
* Returns a random number drawn from an inverse gamma distribution.
*
* ## Method
*
* When
*
* ```tex
* X \sim \operatorname{Gamma}( \alpha, \beta )
* ```
*
* then
*
* ```tex
* \frac{1}{X} \sim \operatorname{InvGamma}\left( \alpha, \tfrac{1}{beta} \right)
* ```
*
* Hence, to generate a draw from an inverse gamma distribution with parameters \\( \alpha \\) and \\( \beta \\), sample `X` from a \\( \operatorname{Gamma}\left( \alpha, \tfrac{1}{\beta} \right) \\) distribution and return `1/X`.
*
*
* @name invgamma
* @type {PRNG}
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} pseudorandom number
*
* @example
* var v = invgamma( 2.0, 1.0 );
* // returns <number>
*
* @example
* var v = invgamma( -2.0, 5.0 );
* // returns NaN
*/
var invgamma = factory();


// EXPORTS //

module.exports = invgamma;
