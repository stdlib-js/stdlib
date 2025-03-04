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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var cidentity = require( '@stdlib/math/base/special/cidentity' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128Array = require( '@stdlib/array/complex128' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var pkg = require( './../package.json' ).name;
var zmap = require( './../lib/main.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var xbuf;
	var x;
	var y;

	xbuf = filledarrayBy( len*2, 'float64', uniform( -100.0, 100.0 ) );
	x = new Complex128Array( xbuf );
	y = new Complex128Array( len );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = zmap( x.length, x, 1, y, 1, cidentity );
			v = out.get( i%len );
			if ( isnan( real( v ) ) || isnan( imag( v ) ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
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
		bench( pkg+':len='+len, f );
	}
}

main();
