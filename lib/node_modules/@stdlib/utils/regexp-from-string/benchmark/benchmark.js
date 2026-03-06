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
var isRegExp = require( '@stdlib/assert/is-regexp' );
var pkg = require( './../package.json' ).name;
var reFromString = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var re;
	var i;

	values = [
		'/beep/',
		'/[A-Z]*/',
		'/\\\\\\\//ig', // eslint-disable-line no-useless-escape
		'/[A-Z]{0,}/',
		'/^boop$/',
		'/(?:.*)/',
		'/(?:beep|boop)/',
		'/\\w+/'
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		re = reFromString( values[ i % values.length ] );
		if ( typeof re !== 'object' ) {
			b.fail( 'should return a regular expression' );
		}
	}
	b.toc();
	if ( !isRegExp( re ) ) {
		b.fail( 'should return a regular expression' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
