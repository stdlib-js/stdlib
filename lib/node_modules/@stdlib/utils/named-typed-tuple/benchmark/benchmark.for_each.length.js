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
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - tuple length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var fields;
	var count;
	var Point;
	var p;
	var i;

	fields = [];
	for ( i = 0; i < len+1; i++ ) {
		fields.push( '_'+i.toString() );
	}
	Point = namedtypedtuple( fields );
	p = new Point();
	count = 0;

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			p.forEach( fcn );
			if ( count !== count ) {
				b.fail( 'should not be NaN' );
			}
		}
		b.toc();
		if ( count !== count ) {
			b.fail( 'should not be NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}

	/**
	* Callback invoked for each tuple element.
	*
	* @private
	*/
	function fcn() {
		count += 1;
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
		bench( pkg+':forEach:len='+len, f );
	}
}

main();
