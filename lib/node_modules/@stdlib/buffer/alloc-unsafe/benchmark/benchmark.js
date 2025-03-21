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
var allocUnsafe = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = allocUnsafe( 10 );
		if ( out.length !== 10 ) {
			b.fail( 'should have length 10' );
		}
	}
	b.toc();
	if ( !isBuffer( out ) ) {
		b.fail( 'should return a Buffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
