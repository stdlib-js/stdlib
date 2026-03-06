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
var UnicodeSparkline = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {UnicodeSparkline} chart - chart instance
* @returns {Function} benchmark function
*/
function createBenchmark( len, chart ) {
	var datum;
	var x;
	var i;

	x = new Float64Array( len );
	if ( chart.type === 'column' || chart.type === 'line' ) {
		datum = randu;
	} else if ( chart.type === 'tristate' ) {
		datum = tristate;
	} else if ( chart.type === 'win-loss' ) {
		datum = winloss;
	} else {
		datum = updown;
	}
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = datum();
	}
	chart.data = x;
	return benchmark;

	/**
	* Returns a tristate chart datum.
	*
	* @private
	* @returns {number} datum
	*/
	function tristate() {
		var r = randu();
		if ( r > 0.66 ) {
			return 1;
		}
		if ( r > 0.33 ) {
			return 0;
		}
		return -1;
	}

	/**
	* Returns a win-loss chart datum.
	*
	* @private
	* @returns {number} datum
	*/
	function winloss() {
		var r = randu();
		if ( r > 0.66 ) {
			return 2;
		}
		if ( r > 0.33 ) {
			return 1;
		}
		if ( r > 0.15 ) {
			return -1;
		}
		return -2;
	}

	/**
	* Returns an up-down chart datum.
	*
	* @private
	* @returns {number} datum
	*/
	function updown() {
		var r = randu();
		if ( r > 0.5 ) {
			return 1;
		}
		return -1;
	}

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
			str = chart.push( datum() ).render();
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

		chart = new UnicodeSparkline({
			'bufferSize': len
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=default,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'yMin': 0.0,
			'yMax': 1.0
		});
		f = createBenchmark( len, chart );
		bench( pkg+'::ymin,ymax:render:type=default,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'column'
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=column,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'column',
			'yMin': 0.0,
			'yMax': 1.0
		});
		f = createBenchmark( len, chart );
		bench( pkg+'::ymin,ymax:render:type=column,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'line'
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=line,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'line',
			'yMin': 0.0,
			'yMax': 1.0
		});
		f = createBenchmark( len, chart );
		bench( pkg+'::ymin,ymax:render:type=line,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'tristate'
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=tristate,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'up-down'
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=up-down,len='+len, f );

		chart = new UnicodeSparkline({
			'bufferSize': len,
			'type': 'win-loss'
		});
		f = createBenchmark( len, chart );
		bench( pkg+':render:type=win-loss,len='+len, f );
	}
}

main();
