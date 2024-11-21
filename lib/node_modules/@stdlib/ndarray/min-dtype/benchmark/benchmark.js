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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var minDataType = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var N;
	var i;

	values = [
		-0.0,
		3.14,
		3.0,
		-3.0,
		1.0e308,
		3.14e37,
		NaN
	];
	N = values.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = minDataType( values[ i%N ] );
		if ( typeof out !== 'string' || out === 'generic' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) || out === 'generic' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
