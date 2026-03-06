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
* Generates a beta distributed random number.
*
* ## References
*
* -   Ahrens, J.H., and U. Dieter. 1974. "Computer methods for sampling from gamma, beta, poisson and bionomial distributions." _Computing_ 12 (3): 223–46. doi:[10.1007/BF02293108](http://dx.doi.org/10.1007/BF02293108).
* -   Jöhnk, M.D. 1964. "Erzeugung von Betaverteilten Und Gammaverteilten Zufallszahlen." _Metrika_ 8: 5–15. <http://eudml.org/doc/175224>.
*
* @name beta
* @type {PRNG}
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Probability} pseudorandom number
*
* @example
* var r = beta( 2.0, 5.0 );
* // returns <number>
*
* @example
* var r = beta( -2.0, 5.0 );
* // returns NaN
*/
var beta = factory();


// EXPORTS //

module.exports = beta;
