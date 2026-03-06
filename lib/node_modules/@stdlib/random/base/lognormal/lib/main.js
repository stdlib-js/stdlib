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
* Returns a log-normally distributed pseudorandom number with parameters `mu` and `sigma`.
*
* @name lognormal
* @type {PRNG}
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {PositiveNumber} pseudorandom number
*
* @example
* var v = lognormal( -2.0, 4.0 );
* // returns <number>
*
* @example
* var v = lognormal( 0.0, -1.0 );
* // returns NaN
*/
var lognormal = factory();


// EXPORTS //

module.exports = lognormal;
