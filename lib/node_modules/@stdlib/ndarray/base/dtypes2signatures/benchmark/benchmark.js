/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var pkg = require( './../package.json' ).name;
var dtypes2signatures = require( './../lib' );


// FIXTURES //

var types = require( './fixtures/types.json' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var out;
	var i;

	len = types.length / 2;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = dtypes2signatures( types, 1, 1 );
		if ( out.length !== len ) {
			b.fail( 'should return an array of length ' + len );
		}
	}
	b.toc();
	if ( !isStringArray( out ) ) {
		b.fail( 'should return an array of strings' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
