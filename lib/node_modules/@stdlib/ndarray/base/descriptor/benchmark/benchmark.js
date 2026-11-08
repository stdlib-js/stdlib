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
var zeroTo = require( '@stdlib/array/zero-to' );
var pkg = require( './../package.json' ).name;
var descriptor = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var offsets;
	var buffer;
	var ord;
	var dt;
	var sh;
	var st;
	var v;
	var i;

	dt = 'generic';
	buffer = zeroTo( 10, dt );
	sh = [ 2, 2 ];
	st = [ 2, 1 ];
	offsets = [
		0,
		1,
		2
	];
	ord = 'row-major';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = descriptor( dt, buffer, sh, st, offsets[ i%offsets.length ], ord );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof v !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
