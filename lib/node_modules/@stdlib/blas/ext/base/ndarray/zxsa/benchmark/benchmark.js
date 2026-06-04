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
var pow = require( '@stdlib/math/base/special/pow' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var zxsa = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - ndarray length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var alpha;
	var xbuf;
	var x;

	xbuf = uniform( len*2, -100.0, 100.0, {
		'dtype': 'float64'
	});
	x = new Complex128Vector( xbuf.buffer );
	alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
		'dtype': 'complex128'
	});
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
			out = zxsa( [ x, alpha ] );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( typeof out !== 'object' ) {
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
