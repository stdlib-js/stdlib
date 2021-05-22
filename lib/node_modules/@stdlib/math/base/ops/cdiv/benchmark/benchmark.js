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
var abs = require( '@stdlib/math/base/special/abs' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var cdiv = require( './../lib' );


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
		y = cdiv( re1, im1, re2, im2 );
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
		y = cdiv( out, re1, im1, re2, im2 );
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

bench( pkg+'::smiths_algorithm', function benchmark( b ) {
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
		y = cdiv( re1, im1, re2, im2 );
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

	function cdiv( re1, im1, re2, im2 ) {
		var a;
		var b;
		if ( abs( re2 ) >= abs( im2 ) ) {
			a = im2 / re2;
			b = re2 + ( im2 * a );
			return [ (re1 + (im1*a) )/b, (im1 - (re1*a) )/b ];
		}
		a = re2 / im2;
		b = ( re2 * a ) + im2;
		return [ ( (re1*a) + im1 )/b, ( (im1*a) - re1 )/b ];
	}
});

bench( pkg+'::smiths_algorithm,memory_reuse', function benchmark( b ) {
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
		y = cdiv( out, re1, im1, re2, im2 );
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

	function cdiv( out, re1, im1, re2, im2 ) {
		var a;
		var b;
		if ( abs( re2 ) >= abs( im2 ) ) {
			a = im2 / re2;
			b = re2 + ( im2 * a );
			out[ 0 ] = (re1 + (im1*a) ) / b;
			out[ 1 ] = (im1 - (re1*a) ) / b;
			return out;
		}
		a = re2 / im2;
		b = ( re2 * a ) + im2;
		out[ 0 ] = ( (re1*a) + im1 ) / b;
		out[ 1 ] = ( (im1*a) - re1 ) / b;
		return out;
	}
});
