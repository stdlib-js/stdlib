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
var bernoulli = require( '@stdlib/random/bernoulli' );
var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pow = require( '@stdlib/math/base/special/pow' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var dcusome = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'float64'
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
	var out;
	var x;
	var k;

	x = bernoulli( [ len ], 0.5, options );
	out = new BooleanVector( len );
	k = scalar2ndarray( len - 1, {
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
			v = dcusome( [ x, out, k ] );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( !isBoolean( v.get( i%len ) ) ) {
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
