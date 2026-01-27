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
var isArray = require( '@stdlib/assert/is-array' );
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var NAME = 'js-array-length-fast-elements-heuristic';

/*
* In some engines, heuristics have been used to ensure "fast elements" (i.e., contiguous memory) for generic arrays. For historical background, see
*
* -   https://www.html5rocks.com/en/tutorials/speed/v8/#toc-topic-numbers
* -   https://github.com/thlorenz/v8-perf/blob/ee76ddf1e414f3299bd03943ef212072dd16200f/data-types.md#fast-elements
*
* Apparently, in more recent V8 versions, the limit at which dictionary mode is triggered when preallocating arrays has increased to ~32 million.
*
* -   https://github.com/v8/v8/blob/2feb99dc8ac75f20d2e5c9c1b343e923476851ea/src/objects/js-array.h#L87-L88
*/
var MAX_FAST_ELEMENTS_HEURISTIC = 64000|0; // eslint-disable-line id-length


// FUNCTIONS //

/**
* Copies an array using a heuristic for ensuring "fast" elements.
*
* @private
* @param {Array} arr - array to copy
* @returns {Array} array copy
*/
function copy1( arr ) {
	var out;
	var len;
	var i;

	len = arr.length;
	if ( len > MAX_FAST_ELEMENTS_HEURISTIC ) {
		out = new Array( MAX_FAST_ELEMENTS_HEURISTIC ); // eslint-disable-line stdlib/no-new-array
		for ( i = 0; i < MAX_FAST_ELEMENTS_HEURISTIC; i++ ) {
			out[ i ] = arr[ i ];
		}
		for ( i = MAX_FAST_ELEMENTS_HEURISTIC; i < len; i++ ) {
			out.push( arr[ i ] );
		}
	} else {
		out = new Array( len ); // eslint-disable-line stdlib/no-new-array
		for ( i = 0; i < len; i++ ) {
			out[ i ] = arr[ i ];
		}
	}
	return out;
}

/**
* Copies an array by preallocating output array memory.
*
* @private
* @param {Array} arr - array to copy
* @returns {Array} array copy
*/
function copy2( arr ) {
	var out;
	var len;
	var i;

	len = arr.length;
	out = new Array( len ); // eslint-disable-line stdlib/no-new-array
	for ( i = 0; i < len; i++ ) {
		out[ i ] = arr[ i ];
	}
	return out;
}

/**
* Copies an array using dynamic memory allocation.
*
* @private
* @param {Array} arr - array to copy
* @returns {Array} array copy
*/
function copy3( arr ) {
	var out;
	var len;
	var i;

	len = arr.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( arr[ i ] );
	}
	return out;
}

/**
* Creates a benchmark function.
*
* @private
* @param {Function} fcn - function to benchmark
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( fcn, len ) {
	var arr;
	var i;

	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( 0 );
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

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			arr[ 0 ] = floor( randu()*100.0 )|0; // cast to int32
			out = fcn( arr );
			if ( out.length !== len ) {
				b.fail( 'unexpected length' );
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
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		f = createBenchmark( copy1, len );
		bench( NAME+'::heuristic:len='+len, f );

		f = createBenchmark( copy2, len );
		bench( NAME+'::preallocate:len='+len, f );

		f = createBenchmark( copy3, len );
		bench( NAME+'::dynamic:len='+len, f );
	}
}

main();
