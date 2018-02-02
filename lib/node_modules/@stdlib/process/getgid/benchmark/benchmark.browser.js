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
var isNull = require( '@stdlib/assert/is-null' );
var pkg = require( './../package.json' ).name;
var getgid = require( './../lib/polyfill.js' );


// MAIN //

bench( pkg+'::browser', function benchmark( b ) {
	var uid;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following *could* be optimized away via loop-invariant code motion. If so, the entire loop will disappear.
		uid = getgid();
		if ( !isNull( uid ) ) {
			b.fail( 'should return null' );
		}
	}
	b.toc();
	if ( !isNull( uid ) ) {
		b.fail( 'should return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
