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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex64Array = require( '@stdlib/array/complex64' );
var filledarray = require( '@stdlib/array/filled' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var pkg = require( './../package.json' ).name;
var nullary = require( './../lib/ndarray.js' );


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
	var x;

	xbuf = filledarray( 0.0, len*2, 'float32' );
	x = new Complex64Array( xbuf.buffer );

	arrays = [ x ];
	shape = [ len ];
	strides = [ 1 ];
	offsets = [ 0 ];

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var f;
		var v;
		var i;

		f = constantFunction( new Complex64( len, len ) );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			nullary( arrays, shape, strides, offsets, f );
			if ( isnan( xbuf[ i%(len*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		v = arrays[ 0 ].get( i%len );
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
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::accessors:ndarray:len='+len+',xtype=complex64', f );
	}
}

main();
