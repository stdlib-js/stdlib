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
var rnorm = require( '@stdlib/random/base/normal' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var incrmgrubbs = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrmgrubbs( (i%20)+3 );
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

bench( pkg+'::options', function benchmark( b ) {
	var opts;
	var f;
	var i;

	opts = {
		'alpha': 0.01,
		'alternative': 'two-sided'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrmgrubbs( (i%20)+3, opts );
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
	var acc;
	var t;
	var i;

	acc = incrmgrubbs( 20 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		t = acc( rnorm( 10.0, 5.0 ) );
		if ( t && typeof t.rejected !== 'boolean' ) {
			b.fail( 'should be a boolean' );
		}
	}
	b.toc();
	if ( t && !isBoolean( t.rejected ) ) {
		b.fail( 'should be a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
