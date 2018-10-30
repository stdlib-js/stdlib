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
* Returns a pseudorandom number drawn from a hypergeometric distribution.
*
* @name hypergeometric
* @type {PRNG}
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {NonNegativeInteger} pseudorandom number
*
* @example
* var v = hypergeometric( 5, 3, 2 );
* // returns <number>
*
* @example
* var v = hypergeometric( -5, 3, 2 );
* // returns NaN
*
* @example
* var v = hypergeometric( 5, 3.14, 2 );
* // returns NaN
*
* @example
* var v = hypergeometric( 5, 3, 1.5 );
* // returns NaN
*
* @example
* var v = hypergeometric( NaN, NaN, NaN );
* // returns NaN
*/
var hypergeometric = factory();


// EXPORTS //

module.exports = hypergeometric;
