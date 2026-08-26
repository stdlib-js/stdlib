/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Float32Matrix = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark( shape ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var arr;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			arr = new Float32Matrix( shape );
			if ( typeof arr !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( !isndarrayLike( arr ) ) {
			b.fail( 'should return an ndarray' );
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

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		f = createBenchmark( [ N, N ] );
		bench( format( '%s::equidimensional:size=%d', pkg, N*N ), f );
	}
}

main();
