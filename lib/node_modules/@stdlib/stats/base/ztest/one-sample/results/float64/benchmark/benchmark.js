/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isObject = require( '@stdlib/assert/is-object' );
var pkg = require( './../package.json' ).name;
var Float64Results = require( './../lib' );


// MAIN //

bench( pkg+'::constructor,new', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new Float64Results();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( v ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::constructor,no_new', function benchmark( b ) {
	var results;
	var v;
	var i;

	results = Float64Results;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = results();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( v ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
