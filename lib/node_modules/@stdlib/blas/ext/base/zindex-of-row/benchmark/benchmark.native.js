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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var uniform = require( '@stdlib/random/array/uniform' );
var zeros = require( '@stdlib/array/zeros' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var Complex128Array = require( '@stdlib/array/complex128' );
var tryRequire = require( '@stdlib/utils/try-require' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var zindexOfRow = tryRequire( resolve( __dirname, './../lib/zindex_of_row.native.js' ) );
var opts = {
	'skip': ( zindexOfRow instanceof Error )
};
var LAYOUTS = [
	'row-major',
	'column-major'
];
var options = {
	'dtype': 'float64'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {string} order - storage layout
* @param {PositiveInteger} N - number of elements along each dimension
* @returns {Function} benchmark function
*/
function createBenchmark( order, N ) {
	var workspace;
	var abuf;
	var xbuf;
	var A;
	var x;

	workspace = zeros( N, 'uint8' );
	abuf = uniform( N*N*2, -100.0, 100.0, options );
	A = new Complex128Array( abuf.buffer );
	xbuf = uniform( N*2, 200.0, 300.0, options );
	x = new Complex128Array( xbuf.buffer );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = zindexOfRow( order, N, N, A, N, x, 1, workspace, 1 );
			if ( isnan( z ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z ) ) {
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
	var min;
	var max;
	var ord;
	var N;
	var f;
	var i;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < LAYOUTS.length; k++ ) {
		ord = LAYOUTS[ k ];
		for ( i = min; i <= max; i++ ) {
			N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
			f = createBenchmark( ord, N );
			bench( format( '%s::native,square_matrix:order=%s,size=%d', pkg, ord, N*N ), opts, f );
		}
	}
}

main();
