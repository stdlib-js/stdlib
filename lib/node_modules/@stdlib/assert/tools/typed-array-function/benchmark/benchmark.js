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
var Int32Array = require( '@stdlib/array/int32' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var typedarrayfcn = require( './../lib' );


// FUNCTIONS //

/**
* Tests if a value is a number.
*
* @private
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether a value is a number
*/
function isNumber( v ) {
	return ( typeof v === 'number' );
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
	var x;
	var i;

	x = new Int32Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = i;
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var bool;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x[ len-1 ] += 1;
			bool = fcn( x );
			if ( !isBoolean( bool ) ) {
				b.fail( 'should return a boolean' );
			}
		}
		b.toc();
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
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
	var fcn;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		fcn = typedarrayfcn( isNumber );
		f = createBenchmark( fcn, len, false );
		bench( pkg+':len='+len, f );
	}
}

main();
