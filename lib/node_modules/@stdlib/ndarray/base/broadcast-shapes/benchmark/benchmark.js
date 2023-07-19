/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var broadcastShapes = require( './../lib' );


// MAIN //

bench( pkg+'::two_shapes', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ [ 8, 1, 6, 1 ], [ 7, 1, 5 ] ],
		[ [ 3, 2 ], [ 3, 1 ] ],
		[ [ 1, 1 ], [ 2, 2 ] ],
		[ [ 1 ], [ 7 ] ],
		[ [ 1, 1, 1, 1, 1 ], [ 5, 5, 5, 5, 5 ] ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = broadcastShapes( values[ i%values.length ] );
		if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
			b.fail( 'something went wrong' );
		}
	}
	b.toc();
	if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
		b.fail( 'something went wrong' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::three_shapes', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ [ 8, 1, 6, 1 ], [ 7, 1, 5 ], [ 1, 1 ] ],
		[ [ 3, 2 ], [ 3, 1 ], [ 3, 2 ] ],
		[ [ 1, 1 ], [ 2, 2 ], [ 2, 1, 2 ] ],
		[ [ 1 ], [ 7 ], [ 7 ] ],
		[ [ 1, 1, 1, 1, 1 ], [ 5, 5, 5, 5, 5 ], [ 5 ] ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = broadcastShapes( values[ i%values.length ] );
		if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
			b.fail( 'something went wrong' );
		}
	}
	b.toc();
	if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
		b.fail( 'something went wrong' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::four_shapes', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		[ [ 8, 1, 6, 1 ], [ 7, 1, 5 ], [ 1, 1 ], [ 8, 1, 1, 1 ] ],
		[ [ 3, 2 ], [ 3, 1 ], [ 3, 2 ], [ 1, 3, 2 ] ],
		[ [ 1, 1 ], [ 2, 2 ], [ 2, 1, 2 ], [ 1, 1, 2, 2 ] ],
		[ [ 1 ], [ 7 ], [ 7 ], [ 1 ] ],
		[ [ 1, 1, 1, 1, 1 ], [ 5, 5, 5, 5, 5 ], [ 5 ], [ 5, 1, 5 ] ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = broadcastShapes( values[ i%values.length ] );
		if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
			b.fail( 'something went wrong' );
		}
	}
	b.toc();
	if ( out === null || out[ out.length-1 ] !== out[ out.length-1 ] ) {
		b.fail( 'something went wrong' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
