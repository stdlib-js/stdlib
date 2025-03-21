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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Float64Array = require( '@stdlib/array/float64' );
var dcopy = require( '@stdlib/blas/base/dcopy' );
var pkg = require( './../package.json' ).name;
var dsort2ins = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Create a benchmark function.
*
* @private
* @param {PositiveInteger} iter - number of iterations
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( iter, len ) {
	var tmp;
	var out;
	var sa;
	var sb;
	var a;
	var b;
	var x;
	var i;
	var j;

	a = 1.0;
	b = 10.0;

	x = [];
	for ( i = 0; i < iter; i++ ) {
		tmp = new Float64Array( len );
		for ( j = 0; j < len; j++ ) {
			sa = (b-a) * (j/len);
			sb = sa / 2.0;
			tmp[ j ] = floor( uniform( a+sa, b+sb ) );
		}
		x.push( tmp );
	}
	out = new Float64Array( len );

	return benchmark;

	function benchmark( b ) {
		var xc;
		var y;
		var i;

		xc = x.slice();
		for ( i = 0; i < iter; i++ ) {
			xc[ i ] = dcopy( len, x[ i ], 1, new Float64Array( len ), 1 );
		}
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = dsort2ins( len, 1, xc[ i ], 1, 0, out, 1, 0 );
			if ( isnan( y[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( y[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

function main() {
	var opts;
	var iter;
	var len;
	var min;
	var max;
	var f;
	var i;

	// NOTE: parameters tuned according to worst case time complexity `O(n^2)`
	iter = 1e6;
	min = 1; // 10^min
	max = 4; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( iter, len );
		opts = {
			'iterations': iter
		};
		bench( pkg+'::mostly_sorted,few_uniques:ndarray:len='+len, opts, f );
		iter = floor( sqrt( iter ) );
	}
}

main();
