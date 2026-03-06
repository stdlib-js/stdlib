/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var pkg = require( './../package.json' ).name;
var float64ToInt64Bytes = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = float64ToInt64Bytes( i );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isUint8Array( y ) ) {
		b.fail( 'should return a Uint8Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign', function benchmark( b ) {
	var out;
	var y;
	var i;

	out = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = float64ToInt64Bytes.assign( i, out, 1, 0 );
		if ( typeof y !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out !== y ) {
		b.fail( 'should return a provided output array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
