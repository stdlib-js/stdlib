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
var pkg = require( './../package.json' ).name;
var identityFunction = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();

		// Note: the following is likely to be optimized away (via inlining). If so, the benchmark will be only measuring random number generation, not the identity function.
		y = identityFunction( x );
		if ( x !== y ) {
			b.fail( 'should return input value' );
		}
	}
	b.toc();
	if ( x === y ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return input value' );
	}
	b.end();
});
