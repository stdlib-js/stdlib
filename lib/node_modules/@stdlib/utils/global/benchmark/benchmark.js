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
var pkg = require( './../package.json' ).name;
var getGlobal = require( './../lib' );


// MAIN //

bench( pkg+'::default', function benchmark( b ) {
	var g;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// NOTE: this may get optimized away, as the return value should be same after every invocation
		g = getGlobal();
		if ( typeof g !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof g !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':codegen=false', function benchmark( b ) {
	var g;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// NOTE: this may get optimized away, as the return value should be same after every invocation
		g = getGlobal( false );
		if ( typeof g !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof g !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':codegen=true', function benchmark( b ) {
	var g;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// NOTE: this may get optimized away, as the return value should be same after every invocation
		g = getGlobal( true );
		if ( typeof g !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof g !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
