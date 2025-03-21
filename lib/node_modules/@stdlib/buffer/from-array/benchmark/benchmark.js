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
var isBuffer = require( '@stdlib/assert/is-buffer' );
var pkg = require( './../package.json' ).name;
var array2buffer = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [ 0, 0, 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = i % 256;
		out = array2buffer( arr );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isBuffer( out ) ) {
		b.fail( 'should return a Buffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
