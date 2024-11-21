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
var pow = require( '@stdlib/math/base/special/pow' );
var isFunction = require( '@stdlib/assert/is-function' );
var pkg = require( './../package.json' ).name;
var papply = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var pow3;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pow3 = papply( pow, 3.0 );
		if ( typeof pow3 !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( pow3 ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::returned_function', function benchmark( b ) {
	var pow3;
	var out;
	var i;

	pow3 = papply( pow, 3.0 );
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = pow3( randu() );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::function_bind', function benchmark( b ) {
	var pow3;
	var out;
	var i;

	pow3 = pow.bind( null, 3.0 );
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = pow3( randu() );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( out !== out ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
