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
var Uint32Array = require( '@stdlib/array/uint32' );
var isArray = require( '@stdlib/assert/is-array' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var number2words = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var N;
	var i;
	var w;

	N = 100;
	values = discreteUniform( N, 0, MAX_SAFE_INTEGER );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		w = number2words( values[ i % N ] );
		if ( typeof w !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( w ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:assign', pkg ), function benchmark( b ) {
	var values;
	var out;
	var N;
	var i;
	var w;

	N = 100;
	values = discreteUniform( N, 0, MAX_SAFE_INTEGER );

	out = new Uint32Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		w = number2words.assign( values[ i % N ], out, 1, 0 );
		if ( typeof w !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( w !== out ) {
		b.fail( 'should return the output array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
