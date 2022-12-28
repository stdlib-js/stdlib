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

var proxyquire = require( 'proxyquire' );
var bench = require( '@stdlib/bench' );
var zeros = require( '@stdlib/array/zeros' );
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x = zeros( len, 'float64' );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var logEach;
		var i;

		logEach = proxyquire( './../lib/main.js', {
			'./logger.js': logger
		});

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			logEach( '%d, %d', x, x );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();

		function logger( str ) {
			if ( typeof str !== 'string' ) {
				b.fail( 'should return a string' );
			}
		}
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
		bench( pkg+'::collections:len='+len, f );
	}
}

main();
