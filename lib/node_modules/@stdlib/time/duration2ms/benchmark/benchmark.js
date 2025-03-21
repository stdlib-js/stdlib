/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var pkg = require( './../package.json' ).name;
var duration2ms = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var ms;
	var i;

	values = [
		'1d',
		'1d2h3m4s5ms',
		'1d2h3m4s',
		'1d2h3m',
		'1d2h',
		'1d2m',
		'1d2s5ms',
		'1d2s',
		'1d5ms',
		'1d',
		'1h3m4s5ms',
		'1h3m4s',
		'1h3m',
		'1h2m',
		'1h2s5ms',
		'1h2s',
		'1h5ms',
		'1h',
		'1m4s5ms',
		'1m4s',
		'1m',
		'1s5ms',
		'1s',
		'5ms',
		'1ms'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ms = duration2ms( values[ i % values.length ] );
		if ( ms !== ms ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( ms ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
