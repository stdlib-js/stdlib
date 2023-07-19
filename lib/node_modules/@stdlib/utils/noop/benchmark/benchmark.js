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
var isUndefined = require( '@stdlib/assert/is-undefined' );
var pkg = require( './../package.json' ).name;
var noop = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via inlining and loop-invariant code motion. If so, the entire loop will disappear.
		v = noop();
		if ( v !== void 0 ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( isUndefined( v ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return undefined' );
	}
	b.end();
});
