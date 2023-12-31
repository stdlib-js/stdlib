/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var pow = require( '@stdlib/math/base/special/pow' );
var Complex64 = require( '@stdlib/complex/float32' );
var isComplex64Array = require('@stdlib/assert/is-complex64array' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var arr = new Complex64Array( len );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var values;
		var out;
		var i;

		values = [
			new Complex64( 1.0, 1.0 ),
			new Complex64( 2.0, 2.0 ),
			new Complex64( 3.0, 3.0 )
		];

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = arr.with( i%len, values[ i%values.length ] );
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
		bench( pkg+':with:len='+len, f );
	}
}

main();
