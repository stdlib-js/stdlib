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
var Uint8Array = require( './../lib' );


// MAIN //

bench( pkg+':reduce', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Uint8Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.reduce( fcn );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function fcn( acc, v ) {
		return acc + v + 1;
	}
});

bench( pkg+'::initial_value:reduce', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Uint8Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.reduce( fcn, 3 );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function fcn( v ) {
		return v + 1;
	}
});
