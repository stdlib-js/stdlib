/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var floor = require( '@stdlib/math/base/special/floor' );
var pow = require( '@stdlib/math/base/special/pow' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var tabulateBy = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {Array} arr - array of unique values
* @param {PositiveInteger} N - number of unique values to use
* @returns {Function} benchmark function
*/
function createBenchmark( len, arr, N ) {
	var x;
	var i;
	var j;

	x = [];
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*N );
		x.push( arr[ j ] );
	}
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
		var j;

		function indicator( value ) {
			return value * 2;
		}

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			j = floor( randu()*N );
			x[ 0 ] = arr[ j ];
			out = tabulateBy( x, indicator );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an array' );
			}
		}
		b.toc();
		if ( !isArray( out ) ) {
			b.fail( 'should return an array' );
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
	var vals;
	var min;
	var max;
	var len;
	var n;
	var f;
	var i;

	min = 0; // 10^min
	max = 4; // 10^max

	len = 1e4;
	vals = [];
	for ( i = 0; i < len; i++ ) {
		vals.push( i );
	}
	for ( i = min; i <= max; i++ ) {
		n = pow( 10, i );
		f = createBenchmark( len, vals, n );
		bench( pkg+':len='+len+',unique='+n, f );
	}
}

main();
