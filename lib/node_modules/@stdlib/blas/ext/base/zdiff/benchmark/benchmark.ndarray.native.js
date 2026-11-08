/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var Complex128Array = require( '@stdlib/array/complex128' );
var format = require( '@stdlib/string/format' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var options = {
	'dtype': 'float64'
};
var zdiff = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( zdiff instanceof Error )
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var obuf;
	var wbuf;
	var xbuf;
	var pbuf;
	var abuf;
	var ol;
	var N1;
	var N2;
	var x;
	var p;
	var a;
	var w;
	var o;
	var k;
	var N;

	N = len;
	N1 = 1;
	N2 = 1;
	k = 1;
	ol = N + N1 + N2 - k;

	xbuf = uniform( N*2, -100.0, 100.0, options );
	pbuf = uniform( N1*2, -100.0, 100.0, options );
	abuf = uniform( N2*2, -100.0, 100.0, options );
	wbuf = uniform( (N+N1+N2-1)*2, -100.0, 100.0, options );
	obuf = uniform( ol*2, -100.0, 100.0, options );

	x = new Complex128Array( xbuf.buffer );
	p = new Complex128Array( pbuf.buffer );
	a = new Complex128Array( abuf.buffer );
	w = new Complex128Array( wbuf.buffer );
	o = new Complex128Array( obuf.buffer );
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
			zdiff( N, k, x, 1, 0, N1, p, 1, 0, N2, a, 1, 0, o, 1, 0, w, 1, 0 );
			if ( isnan( obuf[ i%(ol*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( obuf[ i%(ol*2) ] ) ) {
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
		bench( format( '%s::native:ndarray:len=%d', pkg, len ), opts, f );
	}
}

main();
