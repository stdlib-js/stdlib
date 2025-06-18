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
var isArrayArray = require( '@stdlib/assert/is-array-array' );
var pkg = require( './../package.json' ).name;
var loopOrder = require( './../lib' );


// MAIN //

bench( pkg+'::row-major', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var st;
	var i;

	shape = [ 10, 10, 10 ];
	strides = [
		[ 100, 10, 1 ],
		[ 200, 20, 2 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		st = strides[ i%strides.length ];
		out = loopOrder( shape, [ st, st, st ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::column-major', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var st;
	var i;

	shape = [ 10, 10, 10 ];
	strides = [
		[ 1, 10, 100 ],
		[ 2, 20, 200 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		st = strides[ i%strides.length ];
		out = loopOrder( shape, [ st, st, st ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
