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
var format = require( '@stdlib/string/format' );
var isUint64 = require( '@stdlib/assert/is-uint64' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var pkg = require( './../package.json' ).name;
var Uint64Array = require( './../lib' );


// MAIN //

bench( format( '%s::nonnegative_indices:at', pkg ), function benchmark( b ) {
	var arr;
	var N;
	var u;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Uint64( i ) );
	}
	arr = new Uint64Array( arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		u = arr.at( i%N );
		if ( typeof u !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isUint64( u ) ) {
		b.fail( 'should return a 64-bit unsigned integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::negative_indices:at', pkg ), function benchmark( b ) {
	var arr;
	var N;
	var u;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Uint64( i ) );
	}
	arr = new Uint64Array( arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		u = arr.at( -(i%N)-1 );
		if ( typeof u !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isUint64( u ) ) {
		b.fail( 'should return a 64-bit unsigned integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
