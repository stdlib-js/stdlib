/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Float16 = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var z;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = new Float16( i );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !( z instanceof Float16 ) ) {
		b.fail( 'should return a Float16 instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:value', pkg ), function benchmark( b ) {
	var v;
	var z;
	var i;

	z = new Float16( randu() );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = z.value;
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

bench( format( '%s:toString', pkg ), function benchmark( b ) {
	var o;
	var z;
	var i;

	z = new Float16( randu() );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = z.toString();
		if ( typeof o !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof o !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:toJSON', pkg ), function benchmark( b ) {
	var o;
	var z;
	var i;

	z = new Float16( randu() );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = z.toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
