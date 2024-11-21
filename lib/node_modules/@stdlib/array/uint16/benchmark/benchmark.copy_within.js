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
var pkg = require( './../package.json' ).name;
var Uint16Array = require( './../lib' );


// MAIN //

bench( pkg+':copyWithin', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Uint16Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = i % 128;
		arr[ 0 ] = v;
		arr = arr.copyWithin( 1, 0 );
		if ( arr[ 0 ] !== v ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( arr[ 0 ] !== arr[ 0 ] ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
