/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var pkg = require( './../package.json' ).name;
var binary = require( './../lib/main.js' );


// FUNCTIONS //

/**
* Adds two complex numbers.
*
* @private
* @param {Complex128} z1 - first complex number
* @param {Complex128} z2 - second complex number
* @returns {Complex128} sum
*/
function add( z1, z2 ) {
	return new Complex128( real( z1 )+real( z2 ), imag( z1 )+imag( z2 ) );
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var strides;
	var arrays;
	var shape;
	var xbuf;
	var ybuf;
	var obuf;
	var x;
	var y;
	var o;

	xbuf = filledarrayBy( len*2, 'float64', discreteUniform( -100, 100 ) );
	x = new Complex128Array( xbuf.buffer );

	ybuf = filledarrayBy( len*2, 'float64', discreteUniform( -100, 100 ) );
	y = new Complex128Array( ybuf.buffer );

	obuf = filledarray( 0.0, len*2, 'float64' );
	o = new Complex128Array( obuf.buffer );

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
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			binary( arrays, shape, strides, add );
			if ( isnan( obuf[ i%(len*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		v = arrays[ 2 ].get( i%len );
		if ( isnan( real( v ) ) || isnan( imag( v ) ) ) {
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
	var f;
	var i;

	min = 1; // 10^min
	max = 5; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::accessors:len='+len+',xtype=complex128,ytype=complex128', f );
	}
}

main();
