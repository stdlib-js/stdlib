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
var dtypes = require( '@stdlib/array/dtypes' );
var empty = require( '@stdlib/array/empty' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var array2dtype = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// MAIN //

bench( pkg, function benchmark( b ) {
	var arrays;
	var dt;
	var i;

	arrays = [];
	for ( i = 0; i < DTYPES.length; i++ ) {
		arrays.push( empty( 10, DTYPES[ i ] ) );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dt = array2dtype( arrays[ i%arrays.length ] );
		if ( typeof dt !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( dt ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
