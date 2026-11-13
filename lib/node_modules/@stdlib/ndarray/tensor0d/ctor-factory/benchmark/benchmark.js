/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = factory( 'float64', i, isNumber );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::constructor', pkg ), function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = factory( 'float64', 0.0, isNumber );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new ctor( i );
		if ( arr.length !== 1 ) {
			b.fail( 'should have length 1' );
		}
	}
	b.toc();
	if ( !isndarrayLike( arr ) ) {
		b.fail( 'should return an ndarray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
