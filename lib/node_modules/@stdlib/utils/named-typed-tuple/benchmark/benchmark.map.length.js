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
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var namedtypedtuple = require( './../lib' );


// FUNCTIONS //

/**
* Maps a tuple value to a new value.
*
* @private
* @param {*} value - tuple value
* @returns {*} new value
*/
function fcn( value ) {
	return value + 1.0;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - tuple length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var fields;
	var Point;
	var p;
	var i;

	fields = [];
	for ( i = 0; i < len+1; i++ ) {
		fields.push( '_'+i.toString() );
	}
	Point = namedtypedtuple( fields );
	p = new Point();

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
			out = p.map( fcn );
			if ( typeof out.subtuple !== 'function' ) {
				b.fail( 'should return a tuple' );
			}
		}
		b.toc();
		if ( typeof out.subtuple !== 'function' ) {
			b.fail( 'should return a tuple' );
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
	max = 5; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':map:len='+len, f );
	}
}

main();
