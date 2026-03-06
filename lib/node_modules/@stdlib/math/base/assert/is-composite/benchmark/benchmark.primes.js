/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var log10 = require( '@stdlib/math/base/special/log10' );
var floor = require( '@stdlib/math/base/special/floor' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var PRIMES = require( './../test/fixtures/primes.js' );
var isComposite = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} prime - prime number
* @returns {Function} benchmark function
*/
function createBenchmark( prime ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var bool;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			bool = isComposite( prime );
			if ( typeof bool !== 'boolean' ) {
				b.fail( 'should return a boolean' );
			}
		}
		b.toc();
		if ( !isBoolean( bool ) ) {
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
	var min;
	var max;
	var f;
	var p;
	var i;
	var j;

	min = 1; // 10^min
	max = floor( log10( PRIMES.length ) ); // 10^max

	for ( i = min; i <= max; i++ ) {
		j = pow( 10, i ) - 1;
		p = PRIMES[ j ];
		f = createBenchmark( p );
		bench( pkg+':prime='+p, f );
	}
}

main();
