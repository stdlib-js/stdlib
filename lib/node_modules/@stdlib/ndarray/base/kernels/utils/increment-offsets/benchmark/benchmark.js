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
var isArray = require( '@stdlib/assert/is-array' );
var zeros = require( '@stdlib/array/zeros' );
var oneTo = require( '@stdlib/array/one-to' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var incrementOffsets = require( './../lib' );


// MAIN //

bench( format( '%s:len=5', pkg ), function benchmark( b ) {
	var offsets;
	var inc;
	var v;
	var i;

	offsets = zeros( 5, 'generic' );
	inc = oneTo( offsets.length, 'generic' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = incrementOffsets( offsets, inc );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
