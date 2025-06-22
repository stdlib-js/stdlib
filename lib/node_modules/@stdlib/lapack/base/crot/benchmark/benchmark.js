/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var uniform = require( '@stdlib/random/array/uniform' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var pow = require( '@stdlib/math/base/special/pow' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var pkg = require( './../package.json' ).name;
var crot = require( './../lib/crot.js' );


// VARIABLES //

var options = {
	'dtype': 'float32'
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
	var cx;
	var cy;
	var s;

	cx = new Complex64Array( uniform( len*2, -100.0, 100.0, options ) );
	cy = new Complex64Array( uniform( len*2, -100.0, 100.0, options ) );
	s = new Complex64( 0.6, 0.0 );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var viewX;
		var i;

		viewX = reinterpret( cx, 0 );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			crot( cx.length, cx, 1, cy, 1, 0.8, s );
			if ( isnanf( viewX[ i%(len*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( viewX[ i%(len*2) ] ) ) {
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
		bench( pkg+':len='+len, f );
	}
}

main();
