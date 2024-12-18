/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// MAIN //

bench( pkg+'::nonnegative_indices:at:endianness=little-endian', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	arr = new Float64ArrayFE( 'little-endian', arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.at( i % N );
		if ( typeof v !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( v ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::negative_indices:at:endianness=little-endian', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	arr = new Float64ArrayFE( 'little-endian', arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.at( -( i % N ) - 1 );
		if ( typeof v !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( v ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::nonnegative_indices:at:endianness=big-endian', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 1000; i++ ) {
		arr.push( i );
	}
	arr = new Float64ArrayFE( 'big-endian', arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.at( i % N );
		if ( typeof v !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( v ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::negative_indices:at:endianness=big-endian', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 1000; i++ ) {
		arr.push( i );
	}
	arr = new Float64ArrayFE( 'big-endian', arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.at( -( i % N ) - 1 );
		if ( typeof v !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNumber( v ) ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
