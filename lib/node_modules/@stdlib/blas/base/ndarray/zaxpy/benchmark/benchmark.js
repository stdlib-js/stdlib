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
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var real = require( '@stdlib/complex/float64/real' );
var pow = require( '@stdlib/math/base/special/pow' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var zaxpy = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'complex128'
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
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = uniform( len*2, -100.0, 100.0, {
		'dtype': 'float64'
	});
	x = new ndarray( options.dtype, new Complex128Array( xbuf ), [ len ], [ 1 ], 0, 'row-major' );

	ybuf = uniform( len*2, -100.0, 100.0, {
		'dtype': 'float64'
	});
	y = new ndarray( options.dtype, new Complex128Array( ybuf ), [ len ], [ 1 ], 0, 'row-major' );

	alpha = scalar2ndarray( new Complex128( 1.0, 2.0 ), options.dtype, 'row-major' );

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
			z = zaxpy( [ x, y, alpha ] );
			if ( typeof z !== 'object' ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( real( z.get( i%len ) ) ) ) {
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
		bench( format( '%s:len=%d', pkg, len ), f );
	}
}

main();
