/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var ellipj = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var u;
	var m;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		u = (randu() * 100.0) - 50.0;
		m = randu();
		out = ellipj( u, m );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	for ( i = 0; i < 4; i++ ) {
		if ( !isNumber( out[ i ] ) ) {
			b.fail( 'should return a number' );
		}
	}
	b.pass( 'benchmark finished' );
	b.end();
});
