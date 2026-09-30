/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isCollection = require( '@stdlib/assert/is-collection' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var buffer = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {string} dtype - data type
* @param {PositiveInteger} len - buffer length
* @returns {Function} benchmark function
*/
function createBenchmark( dtype, len ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = buffer( dtype, len );
			if ( out.length !== len ) {
				b.fail( 'unexpected length' );
			}
		}
		b.toc();
		if ( !isCollection( out ) ) {
			b.fail( 'should return an array-like object' );
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
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		f = createBenchmark( 'binary', len );
		bench( format( '%s:len=%d,dtype=binary', pkg, len ), f );

		f = createBenchmark( 'bool', len );
		bench( format( '%s:len=%d,dtype=bool', pkg, len ), f );

		f = createBenchmark( 'complex64', len );
		bench( format( '%s:len=%d,dtype=complex64', pkg, len ), f );

		f = createBenchmark( 'complex128', len );
		bench( format( '%s:len=%d,dtype=complex128', pkg, len ), f );

		f = createBenchmark( 'float64', len );
		bench( format( '%s:len=%d,dtype=float64', pkg, len ), f );

		f = createBenchmark( 'float32', len );
		bench( format( '%s:len=%d,dtype=float32', pkg, len ), f );

		f = createBenchmark( 'generic', len );
		bench( format( '%s:len=%d,dtype=generic', pkg, len ), f );

		f = createBenchmark( 'int16', len );
		bench( format( '%s:len=%d,dtype=int16', pkg, len ), f );

		f = createBenchmark( 'int32', len );
		bench( format( '%s:len=%d,dtype=int32', pkg, len ), f );

		f = createBenchmark( 'int8', len );
		bench( format( '%s:len=%d,dtype=int8', pkg, len ), f );

		f = createBenchmark( 'uint16', len );
		bench( format( '%s:len=%d,dtype=uint16', pkg, len ), f );

		f = createBenchmark( 'uint32', len );
		bench( format( '%s:len=%d,dtype=uint32', pkg, len ), f );

		f = createBenchmark( 'uint8', len );
		bench( format( '%s:len=%d,dtype=uint8', pkg, len ), f );

		f = createBenchmark( 'uint8c', len );
		bench( format( '%s:len=%d,dtype=uint8c', pkg, len ), f );
	}
}

main();
