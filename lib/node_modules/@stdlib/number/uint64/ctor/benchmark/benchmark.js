/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var pkg = require( './../package.json' ).name;
var Uint64 = require( './../lib' );


// MAIN //

bench( format( '%s::constructor', pkg ), function benchmark( b ) {
	var x;
	var z;
	var i;

	x = discreteUniform( 100, 0, MAX_SAFE_INTEGER );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = new Uint64( x[ i % x.length ] );
		if ( typeof z !== 'object' ) {
			b.fail( 'should return a Uint64 instance' );
		}
	}
	b.toc();
	if ( !( z instanceof Uint64 ) ) {
		b.fail( 'should return a Uint64 instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::from', pkg ), function benchmark( b ) {
	var x;
	var z;
	var i;

	x = discreteUniform( 100, 0, UINT32_MAX );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = Uint64.from([
			x[ i % x.length ],
			x[ (i+1) % x.length ]
		]);
		if ( typeof z !== 'object' ) {
			b.fail( 'should return a Uint64 instance' );
		}
	}
	b.toc();
	if ( !( z instanceof Uint64 ) ) {
		b.fail( 'should return a Uint64 instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::of', pkg ), function benchmark( b ) {
	var x;
	var z;
	var i;

	x = discreteUniform( 100, 0, UINT32_MAX );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = Uint64.of( x[ i % x.length ], x[ (i+1) % x.length ] );
		if ( typeof z !== 'object' ) {
			b.fail( 'should return a Uint64 instance' );
		}
	}
	b.toc();
	if ( !( z instanceof Uint64 ) ) {
		b.fail( 'should return a Uint64 instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:toString', pkg ), function benchmark( b ) {
	var x;
	var z;
	var o;
	var i;

	x = discreteUniform( 100, 0, MAX_SAFE_INTEGER );
	z = [];
	for ( i = 0; i < x.length; i++ ) {
		z.push( new Uint64( x[i] ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = z[ i % z.length ].toString();
		if ( typeof o !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof o !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:toJSON', pkg ), function benchmark( b ) {
	var x;
	var z;
	var o;
	var i;

	x = discreteUniform( 100, 0, MAX_SAFE_INTEGER );
	z = [];
	for ( i = 0; i < x.length; i++ ) {
		z.push( new Uint64( x[i] ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = z[ i % z.length ].toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:valueOf', pkg ), function benchmark( b ) {
	var x;
	var z;
	var o;
	var i;

	x = discreteUniform( 100, 0, MAX_SAFE_INTEGER );
	z = [];
	for ( i = 0; i < x.length; i++ ) {
		z.push( new Uint64( x[i] ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = z[ i % z.length ].valueOf();
		if ( typeof o === 'object' ) {
			b.fail( 'should not return an object' );
		}
	}
	b.toc();
	if ( typeof o === 'object' ) {
		b.fail( 'should not return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
