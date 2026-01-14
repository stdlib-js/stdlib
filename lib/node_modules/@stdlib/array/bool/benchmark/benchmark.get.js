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
var isBoolean = require( '@stdlib/assert/is-boolean' );
var pkg = require( './../package.json' ).name;
var BooleanArray = require( './../lib' );


// MAIN //

bench( pkg+':get', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i%2 );
	}
	arr = new BooleanArray( arr );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.get( i%N );
		if ( typeof v !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( v ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
