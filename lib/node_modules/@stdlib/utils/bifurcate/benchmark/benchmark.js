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
var floor = require( '@stdlib/math/base/special/floor' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var bifurcate = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var filter;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	filter = new Array( len );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		for ( j = 0; j < len; j++ ) {
			filter[ j ] = ( randu() < 0.5 );
		}
		o = bifurcate( arr, filter );
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

bench( pkg+'::values', function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': 'values'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	filter = new Array( len );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		for ( j = 0; j < len; j++ ) {
			filter[ j ] = ( randu() < 0.5 );
		}
		o = bifurcate( arr, opts, filter );
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

bench( pkg+'::indices', function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': 'indices'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	filter = new Array( len );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		for ( j = 0; j < len; j++ ) {
			filter[ j ] = ( randu() < 0.5 );
		}
		o = bifurcate( arr, opts, filter );
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

bench( pkg+'::pairs', function benchmark( b ) {
	var filter;
	var opts;
	var vals;
	var arr;
	var len;
	var o;
	var i;
	var j;

	vals = [ 'a', 'b', 'c', 'd', 'e' ];

	opts = {
		'returns': '*'
	};
	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		j = floor( randu()*vals.length );
		arr[ i ] = vals[ j ];
	}
	filter = new Array( len );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		for ( j = 0; j < len; j++ ) {
			filter[ j ] = ( randu() < 0.5 );
		}
		o = bifurcate( arr, opts, filter );
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
