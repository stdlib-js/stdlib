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
var isInt16Array = require( '@stdlib/assert/is-int16array' );
var pkg = require( './../package.json' ).name;
var Int16Array = require( './../lib' );


// MAIN //

bench( pkg+':filter', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = new Int16Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.filter( predicate );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isInt16Array( out ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return v >= 0;
	}
});

bench( pkg+'::this_context:filter', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = new Int16Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.filter( predicate, {} );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isInt16Array( out ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return v >= 0;
	}
});
