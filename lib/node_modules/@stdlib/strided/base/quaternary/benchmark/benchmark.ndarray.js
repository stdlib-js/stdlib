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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var round = require( '@stdlib/math/base/special/round' );
var filledarray = require( '@stdlib/array/filled' );
var add = require( '@stdlib/number/float64/base/add4' );
var pkg = require( './../package.json' ).name;
var quaternary = require( './../lib/ndarray.js' );


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
* @param {string} ztype - input array data type
* @param {string} wtype - input array data type
* @param {string} otype - output array data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, xtype, ytype, ztype, wtype, otype ) {
	var strides;
	var offsets;
	var arrays;
	var shape;
	var x;
	var y;
	var z;
	var w;
	var o;
	var i;

	x = filledarray( 0.0, len, xtype );
	y = filledarray( 0.0, len, ytype );
	z = filledarray( 0.0, len, ztype );
	w = filledarray( 0.0, len, wtype );
	o = filledarray( 0.0, len, otype );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = round( ( randu()*200.0 ) - 100.0 );
		y[ i ] = round( ( randu()*200.0 ) - 100.0 );
		z[ i ] = round( ( randu()*200.0 ) - 100.0 );
		w[ i ] = round( ( randu()*200.0 ) - 100.0 );
	}
	arrays = [ x, y, z, w, o ];
	shape = [ len ];
	strides = [ 1, 1, 1, 1, 1 ];
	offsets = [ 0, 0, 0, 0, 0 ];

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
			quaternary( arrays, shape, strides, offsets, add );
			if ( isnan( o[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( arrays[ 4 ][ i%len ] ) ) {
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
	var t4;
	var t5;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < types.length; j++ ) {
		t1 = types[ j ];
		t2 = types[ j ];
		t3 = types[ j ];
		t4 = types[ j ];
		t5 = types[ j ];
		for ( i = min; i <= max; i++ ) {
			len = pow( 10, i );
			f = createBenchmark( len, t1, t2, t3, t4, t5 );
			bench( pkg+':ndarray:len='+len+',xtype='+t1+',ytype='+t2+',ztype='+t3+',wtype='+t4+',otype='+t5, f );
		}
	}
}

main();
