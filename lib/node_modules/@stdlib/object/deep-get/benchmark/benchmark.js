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
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var deepGet = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var obj;
	var out;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': [ 0.0, 0.5, 1.0 ]
				}
			}
		}
	};
	arr = obj.a.b.c.d;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 1 ] = randu();
		out = deepGet( obj, 'a.b.c.d' );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::paths_array', function benchmark( b ) {
	var paths;
	var arr;
	var obj;
	var out;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': [ 0.0, 0.5, 1.0 ]
				}
			}
		}
	};
	paths = [ 'a', 'b', 'c', 'd' ];
	arr = obj.a.b.c.d;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 1 ] = randu();
		out = deepGet( obj, paths );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var dget;
	var arr;
	var obj;
	var out;
	var i;

	obj = {
		'a': {
			'b': {
				'c': {
					'd': [ 0.0, 0.5, 1.0 ]
				}
			}
		}
	};
	dget = deepGet.factory( 'a.b.c.d' );
	arr = obj.a.b.c.d;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 1 ] = randu();
		out = dget( obj );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
