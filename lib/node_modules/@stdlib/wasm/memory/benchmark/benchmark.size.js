/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var pkg = require( './../package.json' ).name;
var Memory = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} size - initial memory size in units of pages
* @returns {Function} benchmark function
*/
function createBenchmark( size ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var mem;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			mem = new Memory({
				'initial': size
			});
			if ( typeof mem !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( typeof mem !== 'object' ) {
			b.fail( 'should return an object' );
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
	var i;

	min = 1;
	max = 10;

	for ( i = min; i <= max; i++ ) {
		f = createBenchmark( i );
		bench( pkg+':initial='+i, f );
	}
}

main();
