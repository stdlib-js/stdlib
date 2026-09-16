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
var zeros = require( '@stdlib/ndarray/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var pow = require( '@stdlib/math/base/special/pow' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var cdiff = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var workspace;
	var prepend;
	var append;
	var pbuf;
	var abuf;
	var xbuf;
	var out;
	var k;
	var x;

	xbuf = uniform( len*2, -100.0, 100.0, {
		'dtype': 'float32'
	});
	pbuf = uniform( 2, -100.0, 100.0, {
		'dtype': 'float32'
	});
	abuf = uniform( 2, -100.0, 100.0, {
		'dtype': 'float32'
	});
	x = new Complex64Vector( xbuf.buffer );
	prepend = new Complex64Vector( pbuf.buffer );
	append = new Complex64Vector( abuf.buffer );
	out = zeros( [ len + 1 ], {
		'dtype': 'complex64'
	});
	workspace = zeros( [ len + 1 ], {
		'dtype': 'complex64'
	});
	k = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
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
			v = cdiff( [ x, prepend, append, out, workspace, k ] );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( typeof v !== 'object' ) {
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
