/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var Int8Array = require( '@stdlib/array/int8' );
var pkg = require( './../package.json' ).name;
var TristateChart = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {TristateChart} chart - chart instance
* @returns {Function} benchmark function
*/
function createBenchmark( len, chart ) {
	var x;
	var r;
	var i;

	x = new Int8Array( len );
	for ( i = 0; i < x.length; i++ ) {
		r = randu();
		if ( r > 0.51 ) {
			x[ i ] = 1;
		} else if ( r > 0.49 ) {
			x[ i ] = 0;
		} else {
			x[ i ] = -1;
		}
	}
	chart.data = x;
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var str;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			str = chart.push( randu() ).render();
			if ( typeof str !== 'string' ) {
				b.fail( 'should return a string' );
			}
		}
		b.toc();
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
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
	var chart;
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 4; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		chart = new TristateChart({
			'bufferSize': len
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:len='+len, f );
	}
}

main();
