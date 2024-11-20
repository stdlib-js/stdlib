/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isObject = require( '@stdlib/assert/is-object' );
var pkg = require( './../package.json' ).name;
var assign = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var source1;
	var source2;
	var target;
	var out;
	var i;

	source1 = {
		'a': 'beep'
	};
	source2 = {
		'b': 'boop'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		target = {
			'a': i
		};
		out = assign( target, source1, source2 );
		if ( !isObject( out ) ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( out.a !== 'beep' || out.b !== 'boop' ) {
		b.fail( 'should assign properties' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
