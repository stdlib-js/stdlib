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

/* eslint-disable no-restricted-syntax */

'use strict';

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var bench = require( './../lib' );

// Set benchmark options:
var opts = {
	'iterations': null,
	'repeats': 3
};

// Run benchmarks:
bench( 'cross product (function)', opts, function benchmark( b ) {
	var out;
	var x;
	var y;
	var i;
	var j;

	out = [ 0.0, 0.0, 0.0 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = i + 1.0;
		x[ 1 ] = x[ 0 ] + 1.0;
		x[ 2 ] = x[ 1 ] + 1.0;
		cross( out, x, y );
		j = i % 3;
		if ( out[ j ] !== out[ j ] ) {
			b.fail( 'something went wrong!' );
		}
	}
	b.toc();

	if ( isnan( out[ 0 ] ) ) {
		b.fail( 'something went wrong!' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function cross( out, a, b ) {
		out[ 0 ] = (a[1]*b[2]) - (a[2]*b[1]);
		out[ 1 ] = (a[2]*b[0]) - (a[0]*b[2]);
		out[ 2 ] = (a[0]*b[1]) - (a[1]*b[0]);
		return out;
	}
});

bench( 'cross product (inlined)', opts, function benchmark( b ) {
	var out;
	var x;
	var y;
	var i;
	var j;

	out = [ 0.0, 0.0, 0.0 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ 0 ] = i + 1.0;
		x[ 1 ] = x[ 0 ] + 1.0;
		x[ 2 ] = x[ 1 ] + 1.0;
		out[ 0 ] = (x[1]*y[2]) - (x[2]*y[1]);
		out[ 1 ] = (x[2]*y[0]) - (x[0]*y[2]);
		out[ 2 ] = (x[0]*y[1]) - (x[1]*y[0]);
		j = i % 3;
		if ( out[ j ] !== out[ j ] ) {
			b.fail( 'something went wrong!' );
		}
	}
	b.toc();

	if ( isnan( out[ 0 ] ) ) {
		b.fail( 'something went wrong!' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
