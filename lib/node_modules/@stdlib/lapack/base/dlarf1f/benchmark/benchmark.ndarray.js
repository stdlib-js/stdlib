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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var Float64Array = require( '@stdlib/array/float64' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var pkg = require( './../package.json' ).name;
var dlarf1f = require( './../lib/ndarray.js' );


// VARIABLES //

var LAYOUTS = [
	'row-major',
	'column-major'
];
var SIDES = [
	'left',
	'right'
];
var opts = {
	'dtype': 'float64'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {string} order - storage layout
* @param {PositiveInteger} N - number of elements along each dimension
* @param {string} side - specifies the side (left or right)
* @returns {Function} benchmark function
*/
function createBenchmark( order, N, side ) {
	var work;
	var sc1;
	var sc2;
	var C;
	var V;

	work = new Float64Array( N );
	C = discreteUniform( N*N, 1.0, 10.0, opts );
	V = new Float64Array( N );
	V[ N-1 ] = 1.0; // keeping only the last element nonzero to ensure maximum iterations but minimum overflow
	if ( isColumnMajor( order ) ) {
		sc1 = 1;
		sc2 = N;
	} else { // order === 'row-major'
		sc1 = N;
		sc2 = 1;
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;
		var z;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = dlarf1f( side, N, N, V, 1, 0, 1.0, C, sc1, sc2, 0, work, 1, 0 );
			if ( isnan( z[ i%z.length ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z[ i%z.length ] ) ) {
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
	var side;
	var min;
	var max;
	var ord;
	var N;
	var f;
	var i;
	var j;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < LAYOUTS.length; k++ ) {
		ord = LAYOUTS[ k ];
		for ( j = 0; j < SIDES.length; j++ ) {
			side = SIDES[ j ];
			for ( i = min; i <= max; i++ ) {
				N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
				f = createBenchmark( ord, N, side );
				bench( pkg+'::square_matrix:order='+ord+',side='+side+',size='+(N*N), f );
			}
		}
	}
}

main();
