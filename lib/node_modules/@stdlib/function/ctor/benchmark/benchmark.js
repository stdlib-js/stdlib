/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Fcn = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = new Fcn( 'x', 'y', 'return x + y' );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::evaluation', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = new Fcn( 'x', 'y', 'return x + y' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::inline', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = add( i, i+1 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function add( x, y ) {
		return x + y;
	}
});
