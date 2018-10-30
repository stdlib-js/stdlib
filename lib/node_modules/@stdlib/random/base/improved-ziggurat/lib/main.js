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
* Generates a standard normally distributed random number.
*
* ## Method
*
* The basic Ziggurat method works as follows:
*
*
*     ```tex
*     x_{C-1}(r) \left[ f(0) - f\left( x_{C-1}(r) \right) \right] - V(r) = 0
*     ```
*
*     where
*
*     ```tex
*     V(r) = r \; f(r) + \int_r^\infty \; f(x) \; dx
*     ```
*
*     and \\( r \\) denotes the right-most \\( x_1 \\).
*
* -   We then use the following rejection algorithm:
*
*     -   Draw a box \\( B_i \\) at random with probability \\( \tfrac{1}{C} \\).
*     -   Draw a random number from the box as \\( z = U_0 x_i \\) for \\( i > 0 \\) and \\( z = U_0 V / f(x_1) \\).
*     -   If \\( z < x_{i+1} \\), accept \\( z \\).
*     -   If \\( i = 0 \\), accept a \\( v \\) by transforming the tail of the normal distribution to the unit interval and then use rejection technique by Marsaglia, G. (1964) to generate a standard normal variable. Otherwise, if \\( i > 0 \\) and \\( U_1 \left[ f(x_i) - f(x_{i+1})\right] < f(z) - f(x_{i+1}) \\) accept \\( z \\).
*     -   Go back to the first step.
*
* -   The improved version by Doornik (2005) changes step four in order to correct a deficiency of the original Ziggurat algorithm. The updated version requires the generation of two random numbers, a uniform variable drawn from \\( U(-1,1) \\) and the last seven bits of a random integer.
*
* ## References
*
* -   Doornik, Jurgen A. 2005. "An Improved Ziggurat Method to Generate Normal Random Samples." <https://www.doornik.com/research/ziggurat.pdf>.
* -   Marsaglia, George, and Wai Wan Tsang. 2000. "The Ziggurat Method for Generating Random Variables." _Journal of Statistical Software_ 5 (1): 1–7. doi:[10.18637/jss.v005.i08](http://dx.doi.org/10.18637/jss.v005.i08).
* -   Marsaglia, George. 1964. "Generating a Variable from the Tail of the Normal Distribution." _Technometrics_ 6 (1): 101–2. doi:[10.1080/00401706.1964.10490150](http://dx.doi.org/10.1080/00401706.1964.10490150).
*
*
* @name randn
* @type {PRNG}
* @returns {number} pseudorandom number
*
* @example
* var r = randn();
* // returns <number>
*/
var randn = factory();


// EXPORTS //

module.exports = randn;
