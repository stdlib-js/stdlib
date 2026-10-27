/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var commonKeysIn = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj1;
	var obj2;
	var out;
	var i;

	obj1 = {
		'b': 3.141592653589793,
		'c': {
			'c1': 'bap',
			'c3': {
				'c3b': 5,
				'c3c': 'bop'
			},
			'c4': 1337
		},
		'd': [ 4, 5, 6 ],
		'e': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj2 = {
			'a': 'beep',
			'b': 'baz',
			'c': 'boop'
		};
		obj2[ fromCodePoint( i%126 ) ] = 'bar';
		out = commonKeysIn( obj1, obj2 );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isStringArray( out ) && !isEmptyArray( out ) ) {
		b.fail( 'should return an array of strings' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
