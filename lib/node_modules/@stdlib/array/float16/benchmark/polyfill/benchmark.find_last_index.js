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
var uniform = require( '@stdlib/random/array/uniform' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../../package.json' ).name;
var Float16Array = require( './../../lib/polyfill' );


// MAIN //

bench( format( '%s::polyfill:findLastIndex', pkg ), function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = new Float16Array( uniform( 2, 0.0, 10.0 ) );

	// Benchmark worst case scenario...
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.findLastIndex( predicate );
		if ( out !== -1 ) {
			b.fail( 'should return -1' );
		}
	}
	b.toc();
	if ( out !== -1 ) {
		b.fail( 'should return -1' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return ( v < 0.0 );
	}
});

bench( format( '%s::polyfill::this_context:findLastIndex', pkg ), function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Float16Array( uniform( 2, 0.0, 10.0 ) );

	// Benchmark worst case scenario...
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.findLastIndex( predicate, {} );
		if ( out !== -1 ) {
			b.fail( 'should return -1' );
		}
	}
	b.toc();
	if ( out !== -1 ) {
		b.fail( 'should return -1' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return v < 0.0;
	}
});
