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
var uniform = require( '@stdlib/random/array/uniform' );
var zeros = require( '@stdlib/array/zeros' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var pow = require( '@stdlib/math/base/special/pow' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var pkg = require( './../package.json' ).name;
var scumaxabs = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'float32'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = uniform( len, -10.0, 10.0, options );
	x = new ndarray( options.dtype, xbuf, [ len ], [ 1 ], 0, 'row-major' );

	ybuf = zeros( len, options.dtype );
	y = new ndarray( options.dtype, ybuf, [ len ], [ 1 ], 0, 'row-major' );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			v = scumaxabs( [ x, y ] );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnanf( v.get( i%len ) ) ) {
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
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':len='+len, f );
	}
}

main();
