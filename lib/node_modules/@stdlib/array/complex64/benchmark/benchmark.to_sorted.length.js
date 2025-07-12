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
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var pow = require( '@stdlib/math/base/special/pow' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {Complex64} a - first value for comparison
* @param {Complex64} b - second value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	re1 = realf( a );
	re2 = realf( b );
	if ( re1 < re2 ) {
		return -1;
	}
	if ( re1 > re2 ) {
		return 1;
	}
	im1 = imagf( a );
	im2 = imagf( b );
	if ( im1 < im2 ) {
		return -1;
	}
	if ( im1 > im2 ) {
		return 1;
	}
	return 0;
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var arr;
	var i;

	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = arr.toSorted( compareFcn );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( !isComplex64Array( out ) ) {
			b.fail( 'should return a Complex64Array' );
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
		bench( pkg+':toSorted:len='+len, f );
	}
}

main();
