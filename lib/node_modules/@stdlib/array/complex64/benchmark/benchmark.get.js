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
var Float32Array = require( '@stdlib/array/float32' );
var Complex64 = require( '@stdlib/complex/float32' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// MAIN //

bench( pkg+':get', function benchmark( b ) {
	var arr;
	var N;
	var z;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = arr.get( i%N );
		if ( typeof z !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex64( z ) ) {
		b.fail( 'should return a complex number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::memory_reuse:get', function benchmark( b ) {
	var arr;
	var out;
	var N;
	var z;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );
	N = arr.length;

	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = arr.get( out, i%N );
		if ( typeof z !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( z ) || z.length !== 2 ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::manual:get', function benchmark( b ) {
	var arr;
	var buf;
	var N;
	var z;
	var i;
	var j;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );
	N = arr.length;

	buf = new Float32Array( arr.buffer );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = ( i%N ) * 2;
		z = [ buf[ j ], buf[ j+1 ] ];
		if ( typeof z !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( z ) || z.length !== 2 ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::manual,memory_reuse:get', function benchmark( b ) {
	var arr;
	var buf;
	var out;
	var N;
	var i;
	var j;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );
	N = arr.length;

	buf = new Float32Array( arr.buffer );
	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = ( i%N ) * 2;
		out[ 0 ] = buf[ j ];
		out[ 1 ] = buf[ j+1 ];
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) || out.length !== 2 ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
