/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isSlice = require( '@stdlib/assert/is-slice' );
var pkg = require( './../package.json' ).name;
var seq2slice = require( './../lib' );


// MAIN //

bench( pkg+'::defaults', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		':',
		'::'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::positive_integers', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'0:',
		':10',
		'0:10',
		'10:20',
		'10:0',
		'0:10:2',
		'1:5:2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::negative_integers', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'-4:',
		':-1',
		'-4:-1',
		'-10:-20',
		'-10:-0',
		'-1:-4:-2',
		'-1:-4:-2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::end,defaults', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'end:',
		':end',
		'end:end'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::end,subtraction', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'end-1:',
		':end-2',
		'end-5:end-2',
		'end-1:end-5:-2',
		'end:end-10:-2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::end,division', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'end/1:',
		':end/2',
		'end/5:end/2',
		'end/1:end/5:-2',
		'end:end/10:-2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2slice( values[ i%values.length ], 10, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
