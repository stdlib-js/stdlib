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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var factory = require( './../lib' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// MAIN //

bench( pkg+':lastIndexOf', function benchmark( b ) {
	var arr;
	var idx;
	var i;

	arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = arr.lastIndexOf( 5.0, arr.length - 1 );
		if ( typeof idx !== 'number' ) {
			b.fail( 'should return an integer' );
		}
	}
	b.toc();
	if ( !isInteger( idx ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
