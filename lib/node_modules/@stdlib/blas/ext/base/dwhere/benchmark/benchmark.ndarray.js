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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var uniform = require( '@stdlib/random/array/uniform' );
var BooleanArray = require( '@stdlib/array/bool' );
var Float64Array = require( '@stdlib/array/float64' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var pow = require( '@stdlib/math/base/special/pow' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var dwhere = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var condition;
	var cbuf;
	var out;
	var x;
	var y;

	cbuf = bernoulli( len, 0.5, {
		'dtype': 'uint8'
	});
	condition = new BooleanArray( cbuf.buffer );
	out = new Float64Array( len );
	x = uniform( len, -100.0, 100.0, {
		'dtype': 'float64'
	});
	y = uniform( len, -100.0, 100.0, {
		'dtype': 'float64'
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
			v = dwhere( len, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
			if ( !isFloat64Array( v ) ) {
				b.fail( 'should return a Float64Array' );
			}
		}
		b.toc();
		if ( !isFloat64Array( v ) ) {
			b.fail( 'should return a Float64Array' );
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
		bench( format( '%s:ndarray:len=%d', pkg, len ), f );
	}
}

main();
