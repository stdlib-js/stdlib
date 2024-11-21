/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var nullary = require( '@stdlib/strided/base/nullary' );
var binary = require( '@stdlib/strided/base/binary' );
var prng = require( './prng.js' );


// MAIN //

/**
* Fills a strided array with pseudorandom numbers drawn from a raised cosine distribution.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} mu - mean
* @param {integer} sm - `mu` stride length
* @param {Collection} s - scale parameter
* @param {integer} ss - `s` stride length
* @param {Collection} out - output array
* @param {integer} so - `out` stride length
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {Error} must provide valid distribution parameters
* @throws {Error} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* cosine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
*/
function cosine( N, mu, sm, s, ss, out, so, options ) {
	var rand = prng( mu, sm, 0, s, ss, 0, arguments.length > 7, options );
	if ( rand.arity === 0 ) {
		nullary( [ out ], [ N ], [ so ], rand.fcn );
		return out;
	}
	binary( [ mu, s, out ], [ N ], [ sm, ss, so ], rand.fcn );
	return out;
}


// EXPORTS //

module.exports = cosine;
