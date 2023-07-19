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

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var isSkewPersymmetricMatrix = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {Function} fcn - function to benchmark
* @param {PositiveInteger} size - matrix size
* @param {PositiveInteger} N - matrix order
* @returns {Function} benchmark function
*/
function createBenchmark( fcn, size, N ) {
	var strides;
	var buffer;
	var shape;
	var x;

	buffer = new Float64Array( size );
	shape = [ N, N ];
	strides = [ N, 1 ];
	x = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var bool;
		var j;
		var i;

		j = ((N-1)*N) + 1; // index of last checked element

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			// Note: we are testing the worst case scenario where a function must scan the entire matrix before finding a failing value.
			buffer[ j ] = i + 3.14;
			bool = fcn( x );
			if ( bool !== false ) {
				b.fail( 'should return false' );
			}
		}
		b.toc();
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
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
	var sz;
	var N;
	var f;
	var i;

	min = 4; // minimum number of elements

	for ( i = 0; i <= 16; i += 2 ) {
		sz = min * pow( 2, i );
		N = sqrt( sz );
		f = createBenchmark( isSkewPersymmetricMatrix, sz, N );
		bench( pkg+':size='+sz+',dims='+N+'x'+N, f );
	}
}

main();
