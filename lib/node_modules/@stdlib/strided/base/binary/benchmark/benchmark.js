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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add' );
var pkg = require( './../package.json' ).name;
var binary = require( './../lib/main.js' );


// VARIABLES //

var types = [ 'float64' ];


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {string} xtype - input array data type
* @param {string} ytype - input array data type
* @param {string} otype - output array data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, xtype, ytype, otype ) {
	var strides;
	var arrays;
	var shape;
	var x;
	var y;
	var o;

	x = filledarrayBy( len, xtype, discreteUniform( -100, 100 ) );
	y = filledarrayBy( len, ytype, discreteUniform( -100, 100 ) );
	o = filledarray( 0.0, len, otype );

	arrays = [ x, y, o ];
	shape = [ len ];
	strides = [ 1, 1, 1 ];

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
			binary( arrays, shape, strides, add );
			if ( isnan( o[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( arrays[ 2 ][ i%len ] ) ) {
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
	var len;
	var min;
	var max;
	var t1;
	var t2;
	var t3;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j++ ) {
		t1 = types[ j ];
		t2 = types[ j ];
		t3 = types[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, t1, t2, t3 );
			bench( pkg+':len='+len+',xtype='+t1+',ytype='+t2+',otype='+t3, f );
		}
	}
}

main();
