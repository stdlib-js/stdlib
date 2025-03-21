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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var pkg = require( './../package.json' ).name;
var ArrayIndex = require( './../lib' );


// MAIN //

bench( pkg+':toJSON:len=3', function benchmark( b ) {
	var values;
	var opts;
	var v;
	var i;

	opts = {
		'persist': true
	};

	values = [
		new ArrayIndex( [ 1, 2, 3 ], opts ),
		new ArrayIndex( [ 5, 6, 7 ], opts ),
		new ArrayIndex( [ true, false, true ], opts )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].toJSON();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( v ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
