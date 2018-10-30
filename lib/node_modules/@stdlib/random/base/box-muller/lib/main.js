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
* -   Given two independent uniformly distributed random variables \\( U_1 \\) and \\( U_2 \\) in the interval \\( [0,1) \\), let
*
*     ``` tex
*     \begin{align*}
*     Z_1 &= R \cos(\theta) = \sqrt{-2 \ln(U_1)} \cos(2\pi U_2) \\
*     Z_2 &= R \sin(\theta) = \sqrt{-2 \ln(U_1)} \sin(2\pi U_2)
*     \end{align*}
*     ```
*
*     where \\( Z_1 \\) and \\( Z_2 \\) are independent random variables with a standard normal distribution.
*
* -   As two uniform random variates are mapped to two standard normal random variates, one of the random variates is cached and returned upon the following invocation.
*
*
* ## Notes
*
* -   The minimum and maximum pseudorandom numbers which can be generated are dependent on the number of bits an underlying uniform pseudorandom number generator (PRNG) uses. For instance, if a PRNG uses \\( 32 \\) bits, the smallest non-zero number that can be generated is \\( 2^{-32}). When \\( U_1 \\) equals this value and \\( U_2 \\) equals \\( 0 \\),
*
*     ``` tex
*     r = \sqrt{-2\ln(2^{-32})} \cos(2\pi) \approx 6.66
*     ```
*
*     which means that the algorithm cannot produce random variates more than \\( 6.66 \\) standard deviations from the mean.
*
*     <!-- <note> -->
*
*     This corresponds to a \\( 2.74 \times 10^{-11} \\) loss due to tail truncation.
*
*     <!-- </note> -->
*
*
* ## References
*
* -   Box, G. E. P., and Mervin E. Muller. 1958. "A Note on the Generation of Random Normal Deviates." _The Annals of Mathematical Statistics_ 29 (2). The Institute of Mathematical Statistics: 610–11. doi:[10.1214/aoms/1177706645](http://dx.doi.org/10.1214/aoms/1177706645).
* -   Bell, James R. 1968. "Algorithm 334: Normal Random Deviates." _Communications of the ACM_ 11 (7). New York, NY, USA: ACM: 498. doi:[10.1145/363397.363547](http://dx.doi.org/10.1145/363397.363547).
* -   Knop, R. 1969. "Remark on Algorithm 334 \[G5]: Normal Random Deviates." _Communications of the ACM_ 12 (5). New York, NY, USA: ACM: 281. doi:[10.1145/362946.362996](http://dx.doi.org/10.1145/362946.362996).
* -   Marsaglia, G., and T. A. Bray. 1964. "A Convenient Method for Generating Normal Variables." _SIAM Review_ 6 (3). Society for Industrial; Applied Mathematics: 260–64. doi:[10.1137/1006063](http://dx.doi.org/10.1137/1006063).
* -   Thomas, David B., Wayne Luk, Philip H.W. Leong, and John D. Villasenor. 2007. "Gaussian Random Number Generators." _ACM Computing Surveys_ 39 (4). New York, NY, USA: ACM. doi:[10.1145/1287620.1287622](http://dx.doi.org/10.1145/1287620.1287622).
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
