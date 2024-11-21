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
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var ColumnChart = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {ColumnChart} chart - chart instance
* @returns {Function} benchmark function
*/
function createBenchmark( len, chart ) {
	var x;
	var i;

	x = new Float64Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
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

		chart = new ColumnChart({
			'bufferSize': len
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:len='+len, f );

		chart = new ColumnChart({
			'bufferSize': len,
			'yMin': 0.0,
			'yMax': 1.0
		});
		f = createBenchmark( len, chart );
		bench( pkg+'::ymin,ymax:render:len='+len, f );
	}
}

main();
