/*
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
var format = require( '@stdlib/string/format' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );
var log2 = require( '@stdlib/math/base/special/log2' );
var zeros = require( '@stdlib/array/zeros' );
var pkg = require( './../package.json' ).name;
var decompose = require( './../lib' );


// VARIABLES //

var initial = [ 3, 4, 2, 5 ]; // as found in FFTPACK


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - sequence length
* @returns {Function} benchmark function
*/
function createBenchmark( N ) {
	var factors = zeros( 2 + floor( log2( N ) ) );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var d;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			d = decompose( N, 4, initial, 1, 0, factors, 1, 0 );
			if ( isnan( d ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( d ) ) {
			b.fail( 'should not return NaN' );
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
	var lengths;
	var N;
	var f;
	var i;

	lengths = [
		12,
		24,
		36,
		48,
		60,
		120
	];

	for ( i = 0; i < lengths.length; i++ ) {
		N = lengths[ i ];
		f = createBenchmark( N );
		bench( format( '%s:N=%d', pkg, N ), f );
	}
}

main();
