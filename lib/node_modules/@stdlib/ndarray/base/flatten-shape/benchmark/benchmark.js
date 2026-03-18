/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var flattenShape = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 5, 1, 10, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = flattenShape( shape, 3 );
		if ( out.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign', function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 5, 1, 10, {
		'dtype': 'generic'
	});

	out = [ 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = flattenShape.assign( shape, 3, out );
		if ( out.length !== 2 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
