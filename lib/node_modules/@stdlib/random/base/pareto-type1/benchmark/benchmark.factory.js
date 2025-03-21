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
var Uint32Array = require( '@stdlib/array/uint32' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' ).factory;


// MAIN //

bench( pkg+':factory', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = factory();
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( isnan( f( 100.5, 55.5 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:seed=<integer>', function benchmark( b ) {
	var opts;
	var f;
	var i;

	opts = {
		'seed': 1
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		opts.seed += i;
		f = factory( opts );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( isnan( f( 100.5, 55.5 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory:seed=<array>', function benchmark( b ) {
	var seed;
	var opts;
	var f;
	var i;

	opts = {};

	seed = new Uint32Array( 10 );
	for ( i = 0; i < seed.length; i++ ) {
		seed[ i ] = minstd();
	}
	opts.seed = seed;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		opts.seed[ 0 ] = i + 1;
		f = factory( opts );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( isnan( f( 100.5, 55.5 ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
