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
var cis = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var re;
	var im;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re = ( randu()*100.0 ) - 50.0;
		im = ( randu()*100.0 ) - 50.0;
		y = cis( re, im );
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
	var out;
	var re;
	var im;
	var y;
	var i;

	out = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re = ( randu()*100.0 ) - 50.0;
		im = ( randu()*100.0 ) - 50.0;
		y = cis( out, re, im );
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
