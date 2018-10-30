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
* Returns a pseudorandom number drawn from a gamma distribution.
*
* ## References
*
* -   Marsaglia, George, and Wai Wan Tsang. 2000. "A Simple Method for Generating Gamma Variables." _ACM Transactions on Mathematical Software_ 26 (3). New York, NY, USA: ACM: 363–72. doi:[10.1145/358407.358414](http://dx.doi.org/10.1145/358407.358414).
*
*
* @name gamma
* @type {PRNG}
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {PositiveNumber} pseudorandom number
*
* @example
* var v = gamma( 2.0, 4.0 );
* // returns <number>
*
* @example
* var v = gamma( -2.0, 4.0 );
* // returns NaN
*/
var gamma = factory();


// EXPORTS //

module.exports = gamma;
