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
var UNICODE_MAX = require( '@stdlib/constants/unicode/max' );
var pkg = require( './../package.json' ).name;
var fromCodePoint = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof String.fromCodePoint !== 'function' ) // eslint-disable-line  node/no-unsupported-features/es-builtins
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {Function} fcn - function to test
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( fcn, len ) {
	var x;
	var i;

	x = [];
	for ( i = 0; i < len; i++ ) {
		x.push( floor( randu()*UNICODE_MAX ) );
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
			x[ 0 ] = floor( randu()*UNICODE_MAX );
			out = fcn.apply( null, x );
			if ( typeof out !== 'string' ) {
				b.fail( 'should return a string' );
			}
		}
		b.toc();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
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

		f = createBenchmark( fromCodePoint, len );
		bench( pkg+'::apply:len='+len, f );

		f = createBenchmark( String.fromCodePoint, len ); // eslint-disable-line  node/no-unsupported-features/es-builtins
		bench( pkg+'::apply,built-in:len='+len, opts, f );
	}
}

main();
