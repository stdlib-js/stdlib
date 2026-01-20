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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/base/zeros' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var shape2strides = require( './../lib' );


// MAIN //

bench( pkg+':order=row-major', function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 3, 0, 10, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = shape2strides( shape, 'row-major' );
		if ( out.length !== shape.length ) {
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

bench( pkg+':order=column-major', function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 3, 0, 10, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = shape2strides( shape, 'column-major' );
		if ( out.length !== shape.length ) {
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

bench( pkg+':assign:order=row-major', function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 3, 0, 10, {
		'dtype': 'generic'
	});

	out = zeros( shape.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = shape2strides.assign( shape, 'row-major', out );
		if ( out.length !== shape.length ) {
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

bench( pkg+':assign:order=column-major', function benchmark( b ) {
	var shape;
	var out;
	var i;

	shape = discreteUniform( 3, 0, 10, {
		'dtype': 'generic'
	});

	out = zeros( shape.length );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 0 ] += 1;
		out = shape2strides.assign( shape, 'column-major', out );
		if ( out.length !== shape.length ) {
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
