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
* Generates a binomially distributed random number.
*
* ## Method
*
* -   For \\(np < 10\\), the function generates Bernoulli random variates and returns their sum.
* -   For \\(np \geq 10\\), the function uses the [BTRD algorithm][@hormann:1993a].
*
* ## References
*
* -   Hörmann, Wolfgang. 1993. "The generation of binomial random variates." _Journal of Statistical Computation and Simulation_ 46 (1-2): 101–10. doi:[10.1080/00949659308811496][@hormann:1993a].
*
* [@hormann:1993a]: http://dx.doi.org/10.1080/00949659308811496
*
* @name binomial
* @type {PRNG}
* @param {PositiveInteger} n - number of trials
* @param {Probability} p - success probability
* @throws {TypeError} `n` must be a positive integer
* @throws {TypeError} `p` must be a probability
* @returns {NonNegativeInteger} pseudorandom number
*
* @example
* var r = binomial( 20, 0.8 );
* // returns <number>
*/
var binomial = factory();


// EXPORTS //

module.exports = binomial;
