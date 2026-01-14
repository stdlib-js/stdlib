/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var BooleanArray = require( './../lib' );


// MAIN //

bench( pkg+':of', function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = BooleanArray.of();
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof BooleanArray) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':len=5', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [ true, true, true, true, true ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = BooleanArray.of.apply( BooleanArray, buf );
		if ( arr.length !== 5 ) {
			b.fail( 'should have length 5' );
		}
	}
	b.toc();
	if ( !(arr instanceof BooleanArray) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
