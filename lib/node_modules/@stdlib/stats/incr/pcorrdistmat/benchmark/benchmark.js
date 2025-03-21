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
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var isSymmetricMatrix = require( '@stdlib/assert/is-symmetric-matrix' );
var pkg = require( './../package.json' ).name;
var incrpcorrdistmat = require( './../lib' );


// MAIN //

bench( pkg+'::order', function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrpcorrdistmat( 2 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::order,means', function benchmark( b ) {
	var strides;
	var buffer;
	var means;
	var shape;
	var f;
	var i;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrpcorrdistmat( 2, means );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::correlation_matrix', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var dist;
	var f;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrpcorrdistmat( dist );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::correlation_matrix,means', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var dist;
	var f;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrpcorrdistmat( dist, means );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator', function benchmark( b ) {
	var strides;
	var buffer;
	var shape;
	var dist;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrpcorrdistmat( dist );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSymmetricMatrix( out ) ) {
		b.fail( 'should be a symmetric matrix' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator,known_means', function benchmark( b ) {
	var strides;
	var buffer;
	var means;
	var shape;
	var dist;
	var vec;
	var acc;
	var out;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	dist = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	means.set( 0, 3.0 );
	means.set( 1, -2.0 );

	acc = incrpcorrdistmat( dist, means );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vec.set( 0, randu() );
		vec.set( 1, randu() );
		out = acc( vec );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isSymmetricMatrix( out ) ) {
		b.fail( 'should be a symmetric matrix' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
