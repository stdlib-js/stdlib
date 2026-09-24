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
var Float16Array = require( '@stdlib/array/float16' );
var isUint16Array = require( '@stdlib/assert/is-uint16array' );
var pkg = require( './../package.json' ).name;
var reinterpret = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Float16Array( 10 ),
		new Float16Array( 5 ),
		new Float16Array( 20 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = reinterpret( values[ i%values.length ], 1 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isUint16Array( out ) ) {
		b.fail( 'should return a Uint16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
