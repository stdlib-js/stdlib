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
var isBuffer = require( '@stdlib/assert/is-buffer' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Uint8Array = require( '@stdlib/array/uint8' );
var pkg = require( './../package.json' ).name;
var arraybuffer2buffer = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var view;
	var buf;
	var out;
	var i;

	buf = new ArrayBuffer( 10 );
	view = new Uint8Array( buf );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		view[ 0 ] = i % 256;
		out = arraybuffer2buffer( buf );
		if ( out.length !== buf.byteLength ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isBuffer( out ) ) {
		b.fail( 'should return a Buffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::byteoffset', function benchmark( b ) {
	var view;
	var buf;
	var out;
	var i;

	buf = new ArrayBuffer( 10 );
	view = new Uint8Array( buf );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		view[ 0 ] = i % 256;
		out = arraybuffer2buffer( buf, 0 );
		if ( out.length !== buf.byteLength ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isBuffer( out ) ) {
		b.fail( 'should return a Buffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::byteoffset,length', function benchmark( b ) {
	var view;
	var buf;
	var out;
	var i;

	buf = new ArrayBuffer( 10 );
	view = new Uint8Array( buf );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		view[ 0 ] = i % 256;
		out = arraybuffer2buffer( buf, 0, 10 );
		if ( out.length !== buf.byteLength ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isBuffer( out ) ) {
		b.fail( 'should return a Buffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
