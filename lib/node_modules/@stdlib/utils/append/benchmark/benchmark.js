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
var append = require( './../lib' );


// MAIN //

bench( pkg+'::array', function benchmark( b ) {
	var arr;
	var i;

	arr = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = append( arr, [ i, i+1, i+2 ] );
		if ( arr.length !== 3*(i+1) ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var arr;
	var i;

	arr = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.push( i, i+1, i+2 );
		if ( arr.length !== 3*(i+1) ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,apply', function benchmark( b ) {
	var push;
	var arr;
	var i;

	push = Array.prototype.push;

	arr = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		push.apply( arr, [ i, i+1, i+2 ] );
		if ( arr.length !== 3*(i+1) ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations*3 ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
