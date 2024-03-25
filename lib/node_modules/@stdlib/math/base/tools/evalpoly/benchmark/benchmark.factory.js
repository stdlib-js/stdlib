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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// MAIN //

bench( pkg+'::create:factory', function benchmark( b ) {
	var c;
	var f;
	var i;

	c = [];
	for ( i = 0; i < 10; i++ ) {
		c.push( randu() );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		c[ 0 ] = randu();
		f = factory( c );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::evaluate:factory', function benchmark( b ) {
	var x;
	var v;
	var f;
	var c;
	var i;

	c = [];
	for ( i = 0; i < 10; i++ ) {
		c.push( randu() );
	}
	f = factory( c );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 100.0;
		v = f( x );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
