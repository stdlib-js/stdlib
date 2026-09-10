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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var floorf = require( '@stdlib/math/base/special/floorf' );
var log2f = require( '@stdlib/math/base/special/log2f' );
var Float32Array = require( '@stdlib/array/float32' );
var pkg = require( './../package.json' ).name;
var decompose = require( './../lib' );


// VARIABLES //

var initial = new Float32Array( [ 3.0, 4.0, 2.0, 5.0 ] ); // as found in FFTPACK


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - sequence length
* @returns {Function} benchmark function
*/
function createBenchmark( N ) {
	var factors = new Float32Array( 2 + floorf( log2f( N ) ) );
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
			if ( isnanf( d ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( d ) ) {
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
