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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var minViewBufferIndex = require( '@stdlib/ndarray/base/min-view-buffer-index' );
var maxViewBufferIndex = require( '@stdlib/ndarray/base/max-view-buffer-index' );
var pkg = require( './../package.json' ).name;
var minmaxViewBufferIndex = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 0, 0, 0 ];
	shape[ 0 ] = discreteUniform( 1, 10 );
	shape[ 1 ] = discreteUniform( 1, 10 );
	shape[ 2 ] = discreteUniform( 1, 10 );

	strides = shape2strides( shape, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 2 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = minmaxViewBufferIndex( shape, strides, 1000 );
		if ( out.length !== 2 ) {
			b.fail( 'should return an array having two elements' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array containing nonnegative integers' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::memory_reuse:assign', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var mm;
	var i;

	shape = [ 0, 0, 0 ];
	shape[ 0 ] = discreteUniform( 1, 10 );
	shape[ 1 ] = discreteUniform( 1, 10 );
	shape[ 2 ] = discreteUniform( 1, 10 );

	strides = shape2strides( shape, 'row-major' );

	out = [ 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 2 ] *= ( randu() < 0.5 ) ? -1 : 1;
		mm = minmaxViewBufferIndex( shape, strides, 1000, out );
		if ( mm.length !== 2 ) {
			b.fail( 'should return an array having two elements' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( mm ) ) {
		b.fail( 'should return an array containing nonnegative integers' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separately', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 0, 0, 0 ];
	shape[ 0 ] = discreteUniform( 1, 10 );
	shape[ 1 ] = discreteUniform( 1, 10 );
	shape[ 2 ] = discreteUniform( 1, 10 );

	strides = shape2strides( shape, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 2 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out = [ 0, 0 ];
		out[ 0 ] = minViewBufferIndex( shape, strides, 1000 );
		out[ 1 ] = maxViewBufferIndex( shape, strides, 1000 );
		if ( out.length !== 2 ) {
			b.fail( 'should return an array having two elements' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array containing nonnegative integers' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separately,memory_reuse', function benchmark( b ) {
	var strides;
	var shape;
	var out;
	var i;

	shape = [ 0, 0, 0 ];
	shape[ 0 ] = discreteUniform( 1, 10 );
	shape[ 1 ] = discreteUniform( 1, 10 );
	shape[ 2 ] = discreteUniform( 1, 10 );

	strides = shape2strides( shape, 'row-major' );

	out = [ 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		strides[ 2 ] *= ( randu() < 0.5 ) ? -1 : 1;
		out[ 0 ] = minViewBufferIndex( shape, strides, 1000 );
		out[ 1 ] = maxViewBufferIndex( shape, strides, 1000 );
		if ( out.length !== 2 ) {
			b.fail( 'should return an array having two elements' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array containing nonnegative integers' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
