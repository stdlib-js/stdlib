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
var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var realf = require( '@stdlib/complex/float32/real' );
var pow = require( '@stdlib/math/base/special/pow' );
var format = require( '@stdlib/string/format' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var pkg = require( './../package.json' ).name;
var ctriu = require( './../lib' );


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
	var abuf;
	var bbuf;
	var A;
	var B;
	var k;

	abuf = uniform( len*len*2, -100.0, 100.0, options );
	bbuf = uniform( len*len*2, -100.0, 100.0, options );
	A = new Complex64Matrix( abuf.buffer, 0, len, len );
	B = new Complex64Matrix( bbuf.buffer, 0, len, len );

	k = scalar2ndarray( 0, {
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
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = ctriu( [ A, B, k ] );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnanf( realf( out.get( i%len, i%len ) ) ) ) {
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
	max = 3; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( format( '%s:len=%d', pkg, len ), f );
	}
}

main();
