/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isArrayArray = require( '@stdlib/assert/is-array-array' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var pkg = require( './../package.json' ).name;
var filled2dBy = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - array lengths
* @param {NonNegativeInteger} k - number of super-/sub-diagonals
* @returns {Function} benchmark function
*/
function createBenchmark( N, k ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var f;
		var i;

		f = constantFunction( N );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = filled2dBy( N, k, 0, f );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an array of arrays' );
			}
		}
		b.toc();
		if ( !isArrayArray( out ) ) {
			b.fail( 'should return an array of arrays' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var min;
	var max;
	var N;
	var f;
	var i;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	k = 2;
	for ( i = min; i <= max; i++ ) {
		N = floor( sqrt( pow( 10, i ) ) );

		f = createBenchmark( N, k );
		bench( pkg+':k='+k+',size='+(N*N), f );
	}
}

main();
