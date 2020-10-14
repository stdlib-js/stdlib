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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var unary = require( '@stdlib/strided/base/unary' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var dispatch = require( './../lib/main.js' );


// FUNCTIONS //

/**
* Evaluates the identity function.
*
* @private
* @param {*} v - value
* @returns {*} input value
*/
function identity( v ) {
	return v;
}

/**
* Dummy function which throws an error.
*
* @private
* @throws {Error} unexpected error
*/
function throwError() {
	throw new Error( 'unexpected error' );
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} size - dispatch size
* @returns {Function} benchmark function
*/
function createBenchmark( size ) {
	var strided;
	var types;
	var data;
	var x;
	var y;
	var t;
	var i;

	types = [];

	// Create dummy types...
	for ( i = 0; i < (size-1)*2; i += 2 ) {
		t = 'foo' + i;
		types.push( t );
		types.push( t );
	}
	// Append test types:
	types.push( 'float64' );
	types.push( 'float64' );

	// Define a list of callbacks:
	data = [];
	for ( i = 0; i < size-1; i++ ) {
		data.push( throwError );
	}
	// Append a test callback:
	data.push( identity );

	// Create the dispatcher:
	strided = dispatch( unary, types, data, 5, 1, 1 );

	// Create sample arrays:
	x = new Float64Array( 1 );
	y = new Float64Array( x.length );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x[ 0 ] = i;
			z = strided( x.length, x, 1, y, 1 );
			if ( isnan( z[ 0 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z[ 0 ] ) ) {
			b.fail( 'should not return NaN' );
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
	var size;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		size = pow( 2, i );
		f = createBenchmark( size );
		bench( pkg+':size='+size, f );
	}
}

main();
