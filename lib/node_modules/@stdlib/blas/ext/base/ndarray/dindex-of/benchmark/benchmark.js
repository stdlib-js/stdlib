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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var pow = require( '@stdlib/math/base/special/pow' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var pkg = require( './../package.json' ).name;
var dindexOf = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'float64'
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
	var searchElement;
	var fromIndex;
	var xbuf;
	var x;

	xbuf = uniform( len, 0.0, 100.0, options );
	x = new ndarray( options.dtype, xbuf, [ len ], [ 1 ], 0, 'row-major' );

	searchElement = scalar2ndarray( -10.0, {
		'dtype': 'float64'
	});
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	return benchmark;

	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = dindexOf( [ x, searchElement, fromIndex ] );
			if ( out !== out ) {
				b.fail( 'should return an integer' );
			}
		}
		b.toc();
		if ( !isInteger( out ) ) {
			b.fail( 'should return an integer' );
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
