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
var isMultiSlice = require( '@stdlib/assert/is-multi-slice' );
var pkg = require( './../package.json' ).name;
var seq2multislice = require( './../lib' );


// MAIN //

bench( pkg+'::1d', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10 ];

	values = [
		':',
		'::',
		'0:',
		':10',
		'0:10',
		'10:20',
		'10:0',
		'0:10:2',
		'1:5:2',
		'-4:',
		':-1',
		'-4:-1',
		'-10:-20',
		'-10:-0',
		'-1:-4:-2',
		'-1:-4:-2',
		'end:',
		':end',
		'end:end',
		'end-1:',
		':end-2',
		'end-5:end-2',
		'end-1:end-5:-2',
		'end:end-10:-2',
		'end/1:',
		':end/2',
		'end/5:end/2',
		'end/1:end/5:-2',
		'end:end/10:-2',
		'2',
		'3',
		'...'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2multislice( values[ i%values.length ], shape, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::2d', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10, 10 ];

	values = [
		':,:',
		'1,2',
		':,2',
		'2,:',
		'end::-1,2',
		'2,end-1::-2',
		'...,2',
		'2,...'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2multislice( values[ i%values.length ], shape, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::3d', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];

	values = [
		':,:,:',
		'1,2,3',
		':,2,:',
		'2,:,2',
		'end::-1,2,:',
		'2,end-1::-2,...',
		'...,2',
		'2,...',
		'2,...,2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2multislice( values[ i%values.length ], shape, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::4d', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10, 10 ];

	values = [
		':,:,:,:',
		'1,2,3,4',
		':,2,:,2',
		'2,:,2,:',
		'end::-1,2,:,:',
		'2,end-1::-2,...,4',
		'...,2,3',
		'3,2,...',
		'2,...,2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2multislice( values[ i%values.length ], shape, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::5d', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10, 10, 10 ];

	values = [
		':,:,:,:,:',
		'1,2,3,4,5',
		':,2,:,2,:',
		'2,:,2,:,2',
		'end::-1,2,:,:,:end-1:-1',
		'2,end-1::-2,...,4,1:',
		'...,2,3,4',
		'4,3,2,...',
		'2,...,2'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = seq2multislice( values[ i%values.length ], shape, false );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isMultiSlice( out ) ) {
		b.fail( 'should return a slice object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
