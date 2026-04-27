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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var bifurcate = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var filter;
	var vals;
	var arr;
	var o;
	var i;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	arr = discreteUniform( 100, 0, vals.length-1 );
	filter = [
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = bifurcate( arr, filter[ i%filter.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::values', pkg ), function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': 'values'
	};
	arr = discreteUniform( 100, 0, vals.length-1 );
	filter = [
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = bifurcate( arr, opts, filter[ i%filter.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::indices', pkg ), function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': 'indices'
	};
	arr = discreteUniform( 100, 0, vals.length-1 );
	filter = [
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = bifurcate( arr, opts, filter[ i%filter.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::pairs', pkg ), function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var o;
	var i;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': '*'
	};
	arr = discreteUniform( 100, 0, vals.length-1 );
	filter = [
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 ),
		bernoulli( 100, 0.5 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = bifurcate( arr, opts, filter[ i%filter.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
