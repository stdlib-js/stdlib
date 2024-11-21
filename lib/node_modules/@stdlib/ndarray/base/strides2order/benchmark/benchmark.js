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
var randu = require( '@stdlib/random/base/randu' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var pkg = require( './../package.json' ).name;
var strides2order = require( './../lib' );


// MAIN //

bench( pkg+'::row-major', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 1 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = strides2order( strides );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::column-major', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'column-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 1 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = strides2order( strides );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::both', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 10 ];
	strides = shape2strides( shape, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 0 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = strides2order( strides );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
