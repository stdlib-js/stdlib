/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );
var pkg = require( './../package.json' ).name;
var commonKeysIn = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - number of arguments
* @returns {Function} benchmark function
*/
function createBenchmark( N ) {
	var args;
	var o;
	var i;
	var j;

	args = [];
	for ( i = 0; i < N; i++ ) {
		o = {};
		for ( j = 0; j < 10; j++ ) {
			o[ j ] = i * j;
		}
		args.push( o );
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var keys;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			keys = commonKeysIn.apply( null, args );
			if ( typeof keys !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( !isStringArray( keys ) && !isEmptyArray( keys ) ) {
			b.fail( 'should return an array of strings' );
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

	min = 1; // 2^min
	max = 6; // 2^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 2, i );
		f = createBenchmark( len );
		bench( pkg+':num_args='+len+',num_properties=10', f );
	}
}

main();
