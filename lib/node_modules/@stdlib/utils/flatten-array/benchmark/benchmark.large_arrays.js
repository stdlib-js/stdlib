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
var pkg = require( './../package.json' ).name;
var flattenArray = require( './../lib' );


// MAIN //

bench( pkg+'::large_arrays', function benchmark( b ) {
	var data;
	var tmp1;
	var tmp2;
	var out;
	var N;
	var M;
	var L;
	var i;
	var j;
	var k;

	N = 1000;
	M = 100;
	L = 10;

	// Create an NxMxL (3D) array...
	data = [];
	for ( i = 0; i < N; i++ ) {
		tmp1 = [];
		for ( j = 0; j < M; j++ ) {
			tmp2 = [];
			for ( k = 0; k < L; k++ ) {
				tmp2.push( (M*L*i) + (j*L) + k + 1 );
			}
			tmp1.push( tmp2 );
		}
		data.push( tmp1 );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = flattenArray( data );
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
});
