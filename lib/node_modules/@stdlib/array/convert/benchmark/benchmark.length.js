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
var pkg = require( './../package.json' ).name;
var convertArray = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} dtype - data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, dtype ) {
	var arr;
	var i;

	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( i );
	}
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
			out = convertArray( arr, dtype );
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

		f = createBenchmark( len, 'generic' );
		bench( pkg+':len='+len+',dtype=generic', f );

		f = createBenchmark( len, 'float64' );
		bench( pkg+':len='+len+',dtype=float64', f );

		f = createBenchmark( len, 'float32' );
		bench( pkg+':len='+len+',dtype=float32', f );

		f = createBenchmark( len, 'bool' );
		bench( pkg+':len='+len+',dtype=bool', f );

		f = createBenchmark( len, 'complex128' );
		bench( pkg+':len='+len+',dtype=complex128', f );

		f = createBenchmark( len, 'complex64' );
		bench( pkg+':len='+len+',dtype=complex64', f );

		f = createBenchmark( len, 'int32' );
		bench( pkg+':len='+len+',dtype=int32', f );

		f = createBenchmark( len, 'int16' );
		bench( pkg+':len='+len+',dtype=int16', f );

		f = createBenchmark( len, 'int8' );
		bench( pkg+':len='+len+',dtype=int8', f );

		f = createBenchmark( len, 'uint32' );
		bench( pkg+':len='+len+',dtype=uint32', f );

		f = createBenchmark( len, 'uint16' );
		bench( pkg+':len='+len+',dtype=uint16', f );

		f = createBenchmark( len, 'uint8' );
		bench( pkg+':len='+len+',dtype=uint8', f );

		f = createBenchmark( len, 'uint8c' );
		bench( pkg+':len='+len+',dtype=uint8c', f );
	}
}

main();
