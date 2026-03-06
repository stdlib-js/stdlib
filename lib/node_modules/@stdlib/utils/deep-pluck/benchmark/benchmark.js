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
var isArray = require( '@stdlib/assert/is-array' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var deepPluck = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var tmp;
	var out;
	var i;

	arr = new Array( 100 );
	for ( i = 0; i < arr.length; i++ ) {
		tmp = {
			'a': {
				'b': {
					'c': {
						'd': randu()
					}
				}
			}
		};
		arr[ i ] = tmp;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ].a.b.c.d = randu();
		out = deepPluck( arr, 'a.b.c.d' );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
