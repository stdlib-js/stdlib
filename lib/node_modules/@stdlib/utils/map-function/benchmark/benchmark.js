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
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var mapFun = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var o;
	var i;

	function fcn( i ) {
		return i;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = mapFun( fcn, 100 );
		if ( o.length === 0 ) {
			b.fail( 'should return an output array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an output array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop,function', function benchmark( b ) {
	var arr;
	var i;
	var j;

	function fcn( i ) {
		return i;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [];
		for ( j = 0; j < 100; j++ ) {
			arr.push( fcn( j ) );
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

bench( pkg+'::loop,function_call', function benchmark( b ) {
	var arr;
	var i;
	var j;

	function fcn( i ) {
		return i;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [];
		for ( j = 0; j < 100; j++ ) {
			arr.push( fcn.call( {}, j ) );
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

bench( pkg+'::loop', function benchmark( b ) {
	var arr;
	var i;
	var j;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [];
		for ( j = 0; j < 100; j++ ) {
			arr.push( j );
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
	var o;
	var i;

	function fcn( i ) {
		return i;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = mapFun( fcn, 100, {} );
		if ( o.length === 0 ) {
			b.fail( 'should return an output array' );
		}
	}
	b.toc();
	if ( !isArray( o ) ) {
		b.fail( 'should return an output array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
