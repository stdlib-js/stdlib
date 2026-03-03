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
var uniform = require( '@stdlib/random/base/uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var nanminBy = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Accessor function.
*
* @private
* @param {number} value - array element
* @returns {number} accessed value
*/
function accessor( value ) {
	return value * 2.0;
}

/**
* Returns a random number.
*
* @private
* @returns {number} random number
*/
function rand() {
	if ( bernoulli( 0.8 ) < 1 ) {
		return NaN;
	}
	return uniform( -50.0, 50.0 );
}

/**
* Create a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x = filledarrayBy( len, 'generic', rand );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = nanminBy( x.length, x, 1, 0, accessor );
			if ( isnan( y ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

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
		bench( pkg+':ndarray:len='+len, f );
	}
}

main();
