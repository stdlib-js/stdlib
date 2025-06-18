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
var pkg = require( './../package.json' ).name;
var namedtypedtuple = require( './../lib' );


// MAIN //

bench( pkg+':findIndex', function benchmark( b ) {
	var Point;
	var out;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	// Benchmark worst case scenario...
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = p.findIndex( predicate );
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
		return v > 0.0;
	}
});

bench( pkg+'::this_context:findIndex', function benchmark( b ) {
	var Point;
	var out;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	// Benchmark worst case scenario...
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = p.findIndex( predicate, {} );
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
		return v > 0.0;
	}
});
