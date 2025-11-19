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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var array = require( '@stdlib/ndarray/array' );
var uniform = require( '@stdlib/random/array/uniform' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var mathjs = tryRequire( resolve( __dirname, '..', 'node_modules', 'mathjs' ) );
var opts = {
	'skip': ( mathjs instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:ndarray/ctor:dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = uniform( 100*100, -10.0, 10.0, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = new ndarray( 'generic', buf, [ 100, 100 ], [ 100, 1 ], 0, 'row-major' );
		if ( typeof x !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof x !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::stdlib:ndarray/array:dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = uniform( 100*100, -10.0, 10.0, {
		'dtype': 'generic'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = array( buf, {
			'shape': [ 100, 100 ],
			'dtype': 'generic',
			'flatten': false
		});
		if ( typeof x !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof x !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::mathjs:matrix:dtype=generic,size=10000,shape=(100,100)', opts, function benchmark( b ) {
	var buf;
	var x;
	var i;

	buf = mathjs.random( [ 100, 100 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = mathjs.matrix( buf, 'dense', 'number' );
		if ( typeof x !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof x !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
