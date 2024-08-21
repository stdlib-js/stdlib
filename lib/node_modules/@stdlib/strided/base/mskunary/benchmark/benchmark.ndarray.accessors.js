/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var pkg = require( './../package.json' ).name;
var mskunary = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var strides;
	var offsets;
	var arrays;
	var shape;
	var xbuf;
	var ybuf;
	var x;
	var m;
	var y;

	xbuf = filledarrayBy( len*2, 'float32', discreteUniform( -100, 100 ) );
	x = new Complex64Array( xbuf.buffer );

	m = filledarrayBy( len, 'uint8', bernoulli( 0.5 ) );

	ybuf = filledarray( 0.0, len*2, 'float32' );
	y = new Complex64Array( ybuf.buffer );

	arrays = [ x, m, y ];
	shape = [ len ];
	strides = [ 1, 1, 1 ];
	offsets = [ 0, 0, 0 ];

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
			mskunary( arrays, shape, strides, offsets, cidentityf );
			if ( isnan( ybuf[ i%(len*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		v = arrays[ 2 ].get( i%len );
		if ( isnan( realf( v ) ) || isnan( imagf( v ) ) ) {
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
		bench( pkg+'::accessors:ndarray:len='+len+',xtype=complex64,ytype=complex64', f );
	}
}

main();
