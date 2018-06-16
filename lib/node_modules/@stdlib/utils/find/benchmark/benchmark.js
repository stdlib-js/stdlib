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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

bench( pkg+':returns=indices', function benchmark( b ) {
	var out;
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, NaN, i+4, NaN ];
		out = find( arr, isnan );
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

bench( pkg+':returns=values', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	opts = {
		'returns': 'values'
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, NaN, i+4, NaN ];
		out = find( arr, opts, isnan );
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

bench( pkg+':returns=*', function benchmark( b ) {
	var opts;
	var out;
	var arr;
	var i;

	opts = {
		'returns': '*'
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, NaN, i+4, NaN ];
		out = find( arr, opts, isnan );
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
