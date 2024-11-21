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

var Readable = require( 'readable-stream' ).Readable;
var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var circularArrayStream = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var s;
	var i;

	arr = [ 1, 2, 3 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s = circularArrayStream( arr );
		if ( typeof s !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( s instanceof Readable ) ) {
		b.fail( 'should return a readable stream' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':objectMode', function benchmark( b ) {
	var arr;
	var s;
	var i;

	arr = [ 1, 2, 3 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s = circularArrayStream.objectMode( arr );
		if ( typeof s !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( s instanceof Readable ) ) {
		b.fail( 'should return a readable stream' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::factory', function benchmark( b ) {
	var createStream;
	var arr;
	var s;
	var i;

	createStream = circularArrayStream.factory();
	arr = [ 1, 2, 3 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s = createStream( arr );
		if ( typeof s !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( s instanceof Readable ) ) {
		b.fail( 'should return a readable stream' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
