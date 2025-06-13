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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var uniform = require( '@stdlib/random/array/uniform' );
var numel = require( '@stdlib/ndarray/base/numel' );
var array = require( '@stdlib/ndarray/array' );
var pkg = require( './../package.json' ).name;
var sswap = require( './../lib/main.js' );


// VARIABLES //

var OPTS = {
	'dtype': 'float32'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark( shape ) {
	var x;
	var y;
	var N;
	var o;

	N = numel( shape );
	o = {
		'shape': shape
	};
	x = array( uniform( N, -100.0, 100.0, OPTS ), o );
	y = array( uniform( N, -100.0, 100.0, OPTS ), o );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var d;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			d = sswap( x, y );
			if ( isnan( d.data[ i%N ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( d.data[ i%N ] ) ) {
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
	var shape;
	var min;
	var max;
	var N;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = pow( 10, i );

		shape = [ 2, N/2 ];
		f = createBenchmark( shape );
		bench( pkg+'::stacks:size='+N+',ndims='+shape.length+',shape=('+shape.join( ',' )+')', f );

		shape = [ N/2, 2 ];
		f = createBenchmark( shape );
		bench( pkg+'::stacks:size='+N+',ndims='+shape.length+',shape=('+shape.join( ',' )+')', f );
	}
}

main();
