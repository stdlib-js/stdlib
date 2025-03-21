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
var arrayShape = require( './../lib' );


// MAIN //

bench( pkg+'::1d', function benchmark( b ) {
	var arr;
	var out;
	var i;

	// 3
	arr = [ 1, 2, 3 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrayShape( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 1 ) {
		b.fail( 'should return an array of length 1' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d', function benchmark( b ) {
	var arr;
	var out;
	var i;

	// 3x3
	arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 7, 8, 9 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrayShape( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 2 ) {
		b.fail( 'should return an array of length 2' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d', function benchmark( b ) {
	var arr;
	var out;
	var i;

	// 3x3x3
	arr = [
		[ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ] ],
		[ [ 4, 4, 4 ], [ 5, 5, 5 ], [ 6, 6, 6 ] ],
		[ [ 7, 7, 7 ], [ 8, 8, 8 ], [ 9, 9, 9 ] ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrayShape( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 3 ) {
		b.fail( 'should return an array of length 3' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d', function benchmark( b ) {
	var arr;
	var out;
	var i;

	// 3x3x3x3
	arr = [
		[
			[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
			[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
			[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
		],
		[
			[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
			[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
			[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
		],
		[
			[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
			[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
			[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
		]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrayShape( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 4 ) {
		b.fail( 'should return an array of length 4' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d', function benchmark( b ) {
	var arr;
	var out;
	var i;

	// 3x3x3x3x3
	arr = [
		[
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			],
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			],
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			]
		],
		[
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			],
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			],
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			]
		],
		[
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			],
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			],
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			]
		]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arrayShape( arr );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 5 ) {
		b.fail( 'should return an array of length 5' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
