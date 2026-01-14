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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var UNICODE_MAX = require( '@stdlib/constants/unicode/max' );
var pkg = require( './../package.json' ).name;
var fromCodePoint = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof String.fromCodePoint !== 'function' ) // eslint-disable-line  node/no-unsupported-features/es-builtins
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu() * UNICODE_MAX );
		out = fromCodePoint( x );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var out;
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu() * UNICODE_MAX );
		out = String.fromCodePoint( x ); // eslint-disable-line  node/no-unsupported-features/es-builtins
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
