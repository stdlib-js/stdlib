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
* Returns a pseudorandom random number drawn from a geometric distribution with parameter `p`.
*
* @name geometric
* @type {PRNG}
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} pseudorandom number
*
* @example
* var v = geometric( 0.5 );
* // returns <number>
*
* @example
* var v = geometric( 3.14 );
* // returns NaN
*
* @example
* var v = geometric( -1.0 );
* // returns NaN
*
* @example
* var v = geometric( NaN );
* // returns NaN
*/
var geometric = factory();


// EXPORTS //

module.exports = geometric;
