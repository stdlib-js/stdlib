/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var zeros = require( '@stdlib/array/zeros' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var arrays2ptrs = require( './../lib' );


// FIXTURES //

var Context = require( './fixtures/context.js' );


// MAIN //

bench( pkg+'::copy:num_arrays=2,len=10', function benchmark( b ) {
	var arrays;
	var ctx;
	var out;
	var i;

	ctx = new Context();

	arrays = [];
	for ( i = 0; i < 2; i++ ) {
		arrays.push({
			'dtype': 'float64',
			'wdtype': 'float64',
			'length': 10,
			'data': zeros( 10, 'float64' ),
			'stride': 1,
			'offset': 0
		});
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrays2ptrs( ctx, arrays );
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
