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

var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Uint64Array = require( './../lib' );


// VARIABLES //

var SEARCH_VALUE = new Uint64( 1 );


// FUNCTIONS //

/**
* Predicate function.
*
* @private
* @param {Uint64} value - array element
* @returns {boolean} boolean indicating whether a value passes a test
*/
function predicate( value ) {
	return isEqual( value, SEARCH_VALUE );
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var arr = new Uint64Array( len );
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

		// Benchmark worst case scenario (i.e., the predicate never passes, so the method must visit every element)...
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = arr.find( predicate );
			if ( typeof out !== 'undefined' ) {
				b.fail( 'should return undefined' );
			}
		}
		b.toc();
		if ( typeof out !== 'undefined' ) {
			b.fail( 'should return undefined' );
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
		bench( format( '%s:find:len=%d', pkg, len ), f );
	}
}

main();
