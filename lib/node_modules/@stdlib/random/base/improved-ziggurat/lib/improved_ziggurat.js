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

var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var coordsArray = require( './coords_array.js' );
var ratioArray = require( './ratio_array.js' );
var sampleTail = require( './sample_tail.js' );


// VARIABLES //

// Number of blocks:
var NUM_BLOCKS = 128;

// Start of right tail (R):
var START_RIGHT_TAIL = 3.442619855899;

// `X` holds coordinates, such that each rectangle has same area:
var X = coordsArray( NUM_BLOCKS, START_RIGHT_TAIL );

// `R` holds `X[ i+1 ] / X[ i ]`:
var R = ratioArray( X );

// 127 => 0x7F => 00000000000000000000000001111111
var LAST_7_BITS_MASK = 127|0; // asm type annotation


// MAIN //

/**
* Returns a pseudorandom number generator which implements the improved Ziggurat algorithm for generating normally distributed pseudorandom numbers.
*
* @private
* @param {PRNG} randu - PRNG for generating uniformly distributed numbers
* @param {PRNG} randi - PRNG for generating uniformly distributed integers
* @returns {number} pseudorandom number
*/
function wrap( randu, randi ) {
	return randn;

	/**
	* Generates a normally distributed pseudorandom number.
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var r = randn();
	* // returns <number>
	*/
	function randn() {
		var f0;
		var f1;
		var x2;
		var x;
		var u;
		var i;
		var j;
		while ( true ) {
			u = ( 2.0*randu() ) - 1.0;
			i = randi() & LAST_7_BITS_MASK;

			// First try the rectangular boxes...
			if ( abs( u ) < R[ i ] ) {
				return u * X[ i ];
			}
			// If bottom box, sample from the tail...
			if ( i === 0 ) {
				return sampleTail( randu, START_RIGHT_TAIL, u < 0.0 );
			}
			// Is this a sample from the wedges?
			x = u * X[ i ];
			x2 = x * x;
			j = i + 1;
			f0 = exp( -0.5 * ( (X[ i ]*X[ i ]) - x2 ) );
			f1 = exp( -0.5 * ( (X[ j ]*X[ j ]) - x2 ) );
			if ( f1 + (randu()*(f0-f1)) < 1.0 ) {
				return x;
			}
		}
	}
}


// EXPORTS //

module.exports = wrap;
