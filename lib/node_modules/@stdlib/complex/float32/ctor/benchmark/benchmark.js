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
var Complex64 = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var z;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = new Complex64( i, i );
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !( z instanceof Complex64 ) ) {
		b.fail( 'should return a complex number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:real', function benchmark( b ) {
	var re;
	var z;
	var i;

	z = new Complex64( randu(), randu() );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re = z.re;
		if ( isnan( re ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( re ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:imag', function benchmark( b ) {
	var im;
	var z;
	var i;

	z = new Complex64( randu(), randu() );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		im = z.im;
		if ( isnan( im ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( im ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString', function benchmark( b ) {
	var o;
	var z;
	var i;

	z = new Complex64( randu(), randu() );

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

bench( pkg+':toJSON', function benchmark( b ) {
	var o;
	var z;
	var i;

	z = new Complex64( randu(), randu() );

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
