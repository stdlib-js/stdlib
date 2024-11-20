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
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var inmap = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;

	function clbk( v, i ) {
		return v * i;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = EPS;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10.0;
		o = inmap( arr, clbk );
		if ( o !== arr ) {
			b.fail( 'should return input array' );
		}
	}
	b.toc();
	if ( o !== arr ) {
		b.fail( 'should return input array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var arr;
	var len;
	var i;

	function clbk( v, i ) {
		return v * i;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = EPS;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10.0;
		arr = arr.map( clbk );
		if ( arr.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( arr.length === 0 ) {
		b.fail( 'should not be empty' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var arr;
	var len;
	var i;
	var j;

	function clbk( v, i ) {
		return v * i;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = EPS;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10.0;
		for ( j = 0; j < arr.length; j++ ) {
			arr[ j ] = clbk( arr[ j ], j ); // eslint-disable-line node/callback-return
		}
		if ( arr.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( arr.length === 0 ) {
		b.fail( 'should not be empty' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::this_context', function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;

	function clbk( v, i ) {
		return v * i;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = EPS;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10.0;
		o = inmap( arr, clbk, {} );
		if ( o !== arr ) {
			b.fail( 'should return input array' );
		}
	}
	b.toc();
	if ( o !== arr ) {
		b.fail( 'should return input array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
