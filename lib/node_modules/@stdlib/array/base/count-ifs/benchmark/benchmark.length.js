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
var pow = require( '@stdlib/math/base/special/pow' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var uniform = require( '@stdlib/random/array/uniform' );
var pkg = require( './../package.json' ).name;
var countIfs = require( './../lib' );


// FUNCTIONS //

/**
* First predicate function.
*
* @private
* @param {number} v - value
* @returns {boolean} result
*/
function predicate0( v ) {
	return v > 0.0;
}

/**
* Second predicate function.
*
* @private
* @param {number} v - value
* @returns {boolean} result
*/
function predicate1( v ) {
	return v < 0.0;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x0 = uniform( len, -1.0, 1.0, {
		'dype': 'generic'
	});
	var x1 = uniform( len, -1.0, 1.0, {
		'dype': 'generic'
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
			out = countIfs( x0, predicate0, x1, predicate1 );
			if ( typeof out !== 'number' ) {
				b.fail( 'should return a number' );
			}
		}
		b.toc();
		if ( !isNonNegativeInteger( out ) ) {
			b.fail( 'should return a nonnegative integer' );
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
		bench( pkg+':dtype=generic,predicates=2,len='+len, f );
	}
}

main();
