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
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var unflattenShape = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var shape;
	var sizes;
	var out;
	var i;

	shape = [ 5, 9, 3, 4, 2 ];
	sizes = [ 1, 1, 3 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = unflattenShape( shape, 2, sizes );
		if ( out.length !== 7 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:assign', pkg ), function benchmark( b ) {
	var shape;
	var sizes;
	var out;
	var i;

	shape = [ 5, 9, 3, 4, 2 ];
	sizes = [ 1, 1, 3 ];
	out = [ 0, 0, 0, 0, 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = unflattenShape.assign( shape, 2, sizes, out );
		if ( out.length !== 7 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
