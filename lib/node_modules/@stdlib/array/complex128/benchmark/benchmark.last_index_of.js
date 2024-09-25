/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var Complex128Array = require( './../lib' );


// MAIN //

bench( pkg+':lastIndexOf', function benchmark( b ) {
	var arr;
	var idx;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( new Complex128( i, i ) );
	}
	arr = new Complex128Array( arr );

	v = new Complex128( 10.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = arr.lastIndexOf( v, 9 );
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
