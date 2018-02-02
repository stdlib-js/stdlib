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
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var cmul = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re1 = ( randu()*1000.0 ) - 500.0;
		im1 = ( randu()*1000.0 ) - 500.0;
		re2 = ( randu()*1000.0 ) - 500.0;
		im2 = ( randu()*1000.0 ) - 500.0;
		y = cmul( re1, im1, re2, im2 );
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::memory_reuse', function benchmark( b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var out;
	var y;
	var i;

	out = new Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re1 = ( randu()*1000.0 ) - 500.0;
		im1 = ( randu()*1000.0 ) - 500.0;
		re2 = ( randu()*1000.0 ) - 500.0;
		im2 = ( randu()*1000.0 ) - 500.0;
		y = cmul( out, re1, im1, re2, im2 );
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re1 = ( randu()*1000.0 ) - 500.0;
		im1 = ( randu()*1000.0 ) - 500.0;
		re2 = ( randu()*1000.0 ) - 500.0;
		im2 = ( randu()*1000.0 ) - 500.0;
		y = [ (re1*re2) - (im1*im2), (re1*im2) + (im1*re2) ];
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,memory_reuse', function benchmark( b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var y;
	var i;

	y = new Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re1 = ( randu()*1000.0 ) - 500.0;
		im1 = ( randu()*1000.0 ) - 500.0;
		re2 = ( randu()*1000.0 ) - 500.0;
		im2 = ( randu()*1000.0 ) - 500.0;
		y[ 0 ] = (re1*re2) - (im1*im2);
		y[ 1 ] = (re1*im2) + (im1*re2);
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
