/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var pow = require( '@stdlib/math/base/special/pow' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var pkg = require( './../package.json' ).name;
var linspace = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var opts;
		var x1;
		var x2;
		var v;
		var i;

		opts = {
			'dtype': 'complex64'
		};

		x1 = new Complex64( 0.0, 0.0 );
		x2 = new Complex64( 100.0, 10.0 );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			v = linspace( x1, x2, len, opts );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an array-like object' );
			}
		}
		b.toc();
		if ( !isArrayLikeObject( v ) ) {
			b.fail( 'should return an array-like object' );
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
		bench( pkg+'::complex:dtype=complex64,len='+len, f );
	}
}

main();
